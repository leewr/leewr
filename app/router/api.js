'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const apiV1Router = app.router.namespace('/api/v1')
	const { controller, middleware } = app;
	const { topic } = controller.api
	const { user, sign, comment, crawler, images} = controller
	const userRequired = middleware.userRequired()
	const pagination = middleware.pagination()
	const resetApiData = middleware.resetApiData()
	// 内容
	apiV1Router.get('/topics', pagination, resetApiData, topic.index)
	apiV1Router.get('/topic/:id', topic.view)
	apiV1Router.get('/topics/:day', pagination, topic.topArticle)
	// 爬虫内容
	apiV1Router.get('/crawlers', pagination, resetApiData, crawler.getList)
	apiV1Router.get('/crawlers/:id', resetApiData, crawler.view)
	apiV1Router.post('/crawlers/:id', resetApiData, crawler.save)

	// 上传图片
	apiV1Router.post('/upload', userRequired, images.upload)


	// 评论
	apiV1Router.get('/topic/:id/comment', pagination, topic.commentList)
	apiV1Router.post('/topic/:id/comment', userRequired, comment.add)
	apiV1Router.post('/topic/:id/comment/thumbs', userRequired, resetApiData, comment.thumbs)

	 // 喜欢文章
	apiV1Router.post('/topic/:id/like', userRequired, resetApiData, topic.toggleLike)
	// 关注用户
	apiV1Router.post('/u/:id/toggleFollow', userRequired, resetApiData, user.toggleFollow)

	// 用户登录
	apiV1Router.get('/passport/success', resetApiData, user.login)
	apiV1Router.get('/passport/failure', user.login)
	const localStrategy = app.passport.authenticate('local', {
		successRedirect: '/api/v1/passport/success',
		failureRedirect: '/api/v1/passport/failure'
	})
	console.log(localStrategy)
	apiV1Router.post('/passport/local', localStrategy)
	apiV1Router.post('/signout', userRequired, resetApiData, sign.signout)

}