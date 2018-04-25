'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware, config } = app;
  const { sign, topic } = controller
  const { createUserLimit } = middleware.createUserLimit(config.create_user_per_ip)

  const userRequired = middleware.userRequired()

  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/news/:id', controller.news.detail);
  router.resources('topics', '/api/v2/topics', app.controller.topics)

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


  // 新建文章界面
  router.get('/topic/create',userRequired, topic.create)
  // 保存文章
  router.post('/topic/create', topic.put)
  
};
