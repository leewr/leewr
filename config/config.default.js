'use strict'

module.exports = appInfo => {
  const config = (exports = {})
  config.name = 'cnLee'
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523858787680_3058'

  config.tabs = [['article', '随想'], ['found', '发现'], ['top', '精华']]
  // add your config here
  config.middleware = ['authUser', 'errorHandler', 'notfoundHandler']
  config.HOSTS =
    process.env.NODE_ENV === 'production'
      ? 'http://www.leewr.com'
      : 'http://localhost:7001'
  config.errorHandler = {
    match: '/api'
  }
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    }
  }

  config.assets = {
    publicPath: '/public/',
    devServer: {
      debug: false,
      command: 'umi dev',
      port: 8000,
      env: {
        APP_ROOT: process.cwd() + '/app/assets',
        BROWSER: 'none',
        ESLINT: 'none',
        SOCKET_SERVER: 'http://127.0.0.1:8000',
        PUBLIC_PATH: 'http://www.leewr.com'
      }
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
    domainWhiteList: ['m.leewr.com', 'localhost', 'localhost:8080']
  }

  config.redis = {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: 'auth',
      db: 0
    }
  }

  config.default_page = 1
  config.default_limit = 20

  config.site_static_host = process.env.EGG_SITE_STATIC_HOST || ''

  return config
}
