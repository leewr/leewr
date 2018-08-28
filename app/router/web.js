'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  const { router, controller, middleware, config } = app;
  const { sign, topic, api, user } = controller
  const { createUserLimit } = middleware.createUserLimit(config.create_user_per_ip)

  const userRequired = middleware.userRequired()

  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/news/:id', controller.news.detail);
  router.resources('topics', '/api/v1/topics', app.controller.topics)

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

};
