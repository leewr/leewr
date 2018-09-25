'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const apiV1Router = app.router.namespace('/api/v1')
	const { controller, middleware } = app;
	const { topic } = controller.api
	const { user } = controller
	const pagination = middleware.pagination()
	// 内容
	apiV1Router.get('/topics', pagination, topic.index)
	apiV1Router.get('/topic/:id', topic.view)
	apiV1Router.get('/topics/:day', pagination, topic.topArticle)
	// 评论
	apiV1Router.get('/topic/:id/comment', pagination, topic.commentList)
	// 关注用户
	apiV1Router.post('/u/:id/toggleFollow', user.toggleFollow)
}