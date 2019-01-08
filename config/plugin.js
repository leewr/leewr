'use strict'

// had enabled by egg
// exports.static = true;

exports.security = {
  xframe: {
    enable: false
  }
}

exports.nunjucks = {
  enabled: true,
  package: 'egg-view-nunjucks'
}

exports.validate = {
  enabled: true,
  package: 'egg-validate'
}

exports.mysql = {
  enable: true,
  package: 'egg-mysql'
}

exports.passport = {
  enable: true,
  package: 'egg-passport'
}

exports.passportLocal = {
  enable: true,
  package: 'egg-passport-local'
}

exports.routerPlus = {
  enable: true,
  package: 'egg-router-plus'
}

exports.redis = {
  enable: true,
  package: 'egg-redis'
}
