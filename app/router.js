'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const { sign } = controller
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

  // 注册
  router.get('signup', {} ,sign.showSignup)
  router.post('signup', {} ,sign.signup)
};
