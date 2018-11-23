'use strict';
const Controller = require('egg').Controller

class Topic extends Controller {
	// async index () {
	//     const { ctx } = this
	//     ctx.validate({
	//       page: {type: 'string', format: /\d+/, required: false},
	//       tab: {type: 'enum', values: ['ask', 'share', 'job', 'good'], required: false},
	//       limit: {type: 'string', format: /\d+/, required: false}
	//     },ctx.query)
	//     let topics = await ctx.service.topics.list({
	//       page: ctx.query.page,
	//       tab: ctx.params.id,
	//       limit: ctx.query.limit,
	//       mdrender: ctx.query.mdrender !== 'fase'
	//     })
	//     ctx.body = {
	//     	success: false,
	//     	data: topics
	//     } 
 //  	}

// 文章列表
  async index() {
    const { ctx, service } = this
    const pagination = ctx.pagination
    const topis = await service.topic.getArticleList(pagination)
    ctx.body = topis
  }
  // 单篇文章
  async view() {
    const { ctx, service } = this
    const id = ctx.params.id
    console.log(id)
    const topic = await service.topic.getArticleById(id)
    const userInfo = await service.user.getUserInfo(topic.authorId)
    await service.topic.addView(id)
    const current_user = ctx.locals.current_user
    let data = Object.assign(topic, { userInfo: userInfo})
    // 用户已经登录 查询关注信息
    if (current_user) {
      const isFollowed = await service.user.getFollowStatus(topic.authorId, current_user)
      const isLiked = await service.user.getLikeStatus(id, current_user)
      console.log('isLiked', isLiked)
      data = Object.assign(data, { isLiked: isLiked ? true : false})
      data.userInfo = Object.assign(data.userInfo, { isFollowed: isFollowed.status})
    }
    ctx.body = {
      success: true,
      status: 200,
      data: data
    }
  }

  async topArticle() {
  	const { ctx, service } = this
  	const day = ctx.params.day
  	const topics = await service.topic.topArticle(day)
  	ctx.body = {
  		success: true,
  		data: topics
  	}
  }
  // 文章评论列表
  async commentList() {
    const { ctx, service } = this
    const id = ctx.params.id
    const pagination = ctx.pagination
    const data = await service.comment.list(id, pagination)
    ctx.body = {
      success: true,
      status: 200,
      data: data
    }
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
}

module.exports = Topic