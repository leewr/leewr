'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523858787680_3058';

  // add your config here
  config.middleware = ['errorHandler'];
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

  return config;
};
