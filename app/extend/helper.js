'use strict'
const bcrypt = require('bcryptjs')

exports.bcompare = (str, hasd) => {
  return bcrypt.compareSync(str, hasd)
}

exports.bhash = str => {
  return bcrypt.hashSync(str, 10)
}