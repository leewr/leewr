'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.name = 'cnLee'
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523858787680_3058';

  config.tabs = [['article', '随想'], ['found', '发现'], ['top', '精华']]
  // add your config here
  config.middleware = ['authUser', 'errorHandler', 'notfoundHandler'];
  config.errorHandler = {
    match: '/api'
  }
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    }
  }
  config.News = {
    pageSize: 20,
    serverUrl: 'https://cnodejs.org/api/v1'
  }

  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'root',
      database: 'dcdabase'
    },
    app: true,
    agent: false
  }

  config.passportLocal = {
    usernameField: 'username',
    passwordField: 'password'
  }

  config.security = {
    xframe: {
      enable: false
    },
    domainWhiteList: ['.baidu.com']
  }


  config.default_page = 1
  config.default_limit = 20

  config.site_static_host = process.env.EGG_SITE_STATIC_HOST || ''
  
  return config;
};
