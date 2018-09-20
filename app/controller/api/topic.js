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
    ctx.body = {
      success: true,
      data: topis
    }
  }
  // 单篇文章
  async view () {
    const { ctx, service } = this
    const id = ctx.params.id
    const topic = await service.topic.getArticleById(id)
    ctx.body = {
      success: true,
      status: 200,
      data: topic
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
}

module.exports = Topic