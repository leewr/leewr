'use strict'

const Controller = require('egg').Controller

class userController extends Controller {
	// 用户主页
	async index() {
		const { ctx, service } = this
		const authorId = ctx.params.id
		const current_user = ctx.locals.current_user
		const topic = await service.topic.getArticleList(authorId)
		const authorData = await service.user.getUserInfo(authorId)
		let isFollowed
		
		// 用户已登录获取用户专注状态
		if (current_user) {
			isFollowed = await service.user.getFollowStatus(authorId, current_user)
		}
		if (authorData) {
			await ctx.render('/user/userIndex.tpl', {authorId: authorId, data: topic, authorData: authorData, isFollowed: isFollowed})
		} else {
			ctx.status = 404
		}
		
	}

	// 关注用户
	async toggleLike() {
		const {ctx, service } = this
		const authorId = ctx.params.id
		const { body } = ctx.request
		const current_user = ctx.locals.current_user
		let status = body.status ? body.status : 'ok'
		console.log('toggleLike')
		if (ctx.locals.current_user) {
			const retrunData = await service.user.toggleLike(authorId, current_user)
			if (retrunData) {
				ctx.body = {
					success: true
				}	
			} else {
				ctx.body = {
					success: false
				}
			}
				
		} else {
			ctx.redirect('/signin')
      		return
		}
	}
}

module.exports = userController


