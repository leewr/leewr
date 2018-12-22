'use strict'
const Controller = require('egg').Controller

class TopicController extends Controller {

  // 文章列表
  async index() {
    const { ctx, service } = this
    const pagination = ctx.pagination
    console.log(pagination)
    const topis = await service.topic.getArticleList()
    ctx.body = {
      success: true,
      topis
    }
  }

  // 创建文章
  async create() {
    const { ctx, config } = this
    await ctx.render('/topic/add.tpl', {
      tabs: config.tabs
    })
  }

  // 文章展示
  async view() {
    const { ctx, service } = this
    const id = ctx.params.id
    const current_user = ctx.locals.current_user
    const topic = await service.topic.getArticleById(id)
    const author = await service.user.getUserInfo(topic.authorId)
    const addView = await service.topic.addView(id)
    console.log('id', id)
    const commentList = await service.comment.list(id)
    console.log('length', commentList.length)
    let isFollowed
    let isLiked
    if (current_user) {
      isFollowed = await service.user.getFollowStatus(topic.authorId, current_user)
      isLiked = await service.user.getLikeStatus(id, current_user)
      console.log('isLiked', isLiked)
    }

    if (topic) {
      await ctx.render('/topic/view.tpl', { data: topic, author: author, isFollowed: isFollowed, isLiked: isLiked, comment: { data: commentList, total: commentList.length}})
    } else {
      ctx.status = 404
    }
  }

  // 文章修改展示
  async edit() {
    const { ctx, service } = this
    const id = ctx.params.id
    const topic = await service.topic.getArticleById(id)
    await ctx.render('/topic/edit.tpl', { data: topic})
  }

  async update() {
    const { ctx, service, config } = this
    let { id, title, tab, content, summary } = ctx.request.body
    const topic = await service.topic.getArticleById(id)
    if (!topic) {
      ctx.status = 404
      ctx.message = '此话题不存在或已被删除'
      ctx.body = 'not found'
      return
    }
    // 当user 为管理员的时候有权修改
    if (topic.authorId.toString() === ctx.user.id.toString()) {
      title = title.trim()
      tab = tab.trim()
      content = content.trim()
      // 验证
      let editError
      if (title === '') {
        editError = '标题不能为空'
      } else if (title.length < 2 || title.length > 100) {
        editError = '标题字数太多或太少'
      } else if (!tab) {
        editError = '必须选择一个版块。'
      } else if (content === '') {
        editError = '内容不能为空'
      }

      if (editError) {
        await ctx.redirect('/topic/note/'+id, {
          action: 'edit',
          edit_error: editError,
          topic_id: topic.id,
          content,
          tabs: config.tabs
        })
        return
      }
      // 保存话题
      const result = await service.topic.save(
        id,
        title,
        content,
        summary,
        tab
      )
      if (result.protocol41) {
        ctx.redirect('/topic/' + topic.id)
      } 
    } else {
      ctx.status = 403
      ctx.message = '对不起，你不能编辑此话题'
      ctx.body = 'forbidden'
      return
    }
  }

  // 发表主题帖
  async put() {
    const { ctx, service } = this
    const { tabs } = this.config
    const { body } = ctx.request
    const allTabs = tabs.map( item => item[0])
    // 内容验证
    const RULE_CREATE = {
      title: {
        type: 'string',
        max: 100,
        min: 1
      },
      content: {
        type: 'string'
      },
      tab: {
        type: 'enum',
        values: allTabs
      }
    }
    const errors = await ctx.validate(RULE_CREATE, ctx.request.body)
    if (errors) {
      ctx.redirect('/topic/create')
      return
    }
    if (!body.summary) {
      body.summary = body.content.substr(0, 100)
    }
    for (let i = 0; i < 5; i++) {
      this.app.redis.del(`indexList-${i + 1}`)
      console.log(i)
    }
    // 数据库保存
    const topic = await service.topic.newAndSave(
      body.title,
      body.content,
      body.summary,
      body.tab,
      ctx.user.id
    )
    // 增加用户帖子发表数量 increaseArticleCount
    await service.user.increaseArticleCount(ctx.user.id, 1, 1)
    ctx.redirect('/topic/' + topic.insertId)
    // await ctx.render('/topic/'+ topic.insertId)
  }

  // 喜欢 // 关注
  async toggleLike() {
    const { ctx, service } = this
    const id = ctx.params.id
    const { body } = ctx.request
    const current_user = ctx.locals.current_user
    let data = null
    if (current_user) {
      data = await service.topic.toggleLike(id, current_user)
      if (data) {
        ctx.body = {
          success: true
        } 
      } else {
        ctx.body = {
          success: false
        }
      }
    } else {
      // ctx.redirect('/signin')
      // ctx.status = 401
      ctx.body = {
        success: true,
        status: 401,
        data: '没有登录'
      }
    }
  }

  // 我喜欢的文章
  async likedAeticle() {
    const { ctx , service } = this
    const userId = ctx.locals.current_user.id
    return await service.topic.likedAeticle(userId)
  }
}

module.exports = TopicController
