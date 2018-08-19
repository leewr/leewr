'use strict'
const bcrypt = require('bcryptjs')

exports.bcompare = (str, hasd) => {
  return bcrypt.compareSync(str, hasd)
}

exports.bhash = str => {
  return bcrypt.hashSync(str, 10)
}

exports.staticFile = function(filePath) {
  if (filePath.indexOf('http') === 0 || filePath.indexOf('//') === 0) {
    return filePath;
  }
  return this.app.config.site_static_host + filePath;
};