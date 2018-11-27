'use strict';
const Controller = require('egg').Controller

class Topic extends Controller {
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
      data = Object.assign(data, { isLiked: isLiked ? true : false})
      data.userInfo = Object.assign(data.userInfo, { isFollowed: isFollowed !==null ? isFollowed.status : false})
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
          status: data.status
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