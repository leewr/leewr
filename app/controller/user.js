'use strict'

const Controller = require('egg').Controller

class userController extends Controller {
	// 用户主页
	async index() {
		const { ctx, service } = this
		const authorId = ctx.params.id
		const topic = await service.topic.getArticleList(authorId)
		const userData = await service.user.getUserInfo(authorId)
		console.log(userData)
		await ctx.render('/user/userIndex.tpl', {authorId: authorId, data: topic, userData: userData})
	}
}

module.exports = userController


