'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const apiV1Router = app.router.namespace('/api/v1')
	const { controller, middleware } = app;
	const { topic } = controller.api
	const pagination = middleware.pagination()
	// 内容
	apiV1Router.get('/topics', pagination, topic.index)
	apiV1Router.get('/topics/:day', pagination, topic.topArticle)
}