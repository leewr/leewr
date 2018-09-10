'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  const { router, controller, middleware, config } = app;
  const { sign, topic, api, user, setting, images, singlePages, comment } = controller
  const { createUserLimit } = middleware.createUserLimit(config.create_user_per_ip)

  const userRequired = middleware.userRequired()

  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/news/:id', controller.news.detail);
  // router.resources('topics', '/api/v1/topics', app.controller.topics)

  // 登录
  router.get('/signin', sign.showLogin)
  const localStrategy = app.passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signin'
  })
  router.post('/passport/local', localStrategy)

  router.all('/signout', sign.signout)

  // 注册
  router.get('/signup', sign.showSignup)
  // todo createUserLimit
  router.post('/signup', sign.signup)
  // 用户主页
  router.get('/u/:id', user.index)
  // 关注用户
  router.post('/u/:id/toggleFollow', user.toggleFollow)
  // 喜欢的文章
  router.get('/u/:id/thumbs', user.showThumbs)
  
  // 设置页面
  router.get('/setting/index', userRequired, setting.index)
  router.post('/setting/update', userRequired, setting.update)

  // 新建文章界面
  router.get('/topic/create', userRequired, topic.create)
  // 保存文章
  router.post('/topic/create', userRequired, topic.put)
  // 修改文章提交
  router.post('/topic/update', userRequired, topic.update)
  // 文章展示
  router.get('/topic/:id', topic.view)
  // 喜欢文章
  router.post('/topic/:id/like', topic.toggleLike)

  // 修改文章展示
  router.get('/topic/note/:id', userRequired, topic.edit)

  // form图片上传
  router.post('/upload', userRequired, images.upload)

  // 固定页面
  // 友情链接
  router.get('/links', singlePages.links)
  router.get('/help', singlePages.help)
  router.get('/about', singlePages.about)
  router.get('/timeline', singlePages.timeline)

  // 评论
  router.post('/topic/:id/comment', userRequired, comment.add)
};
