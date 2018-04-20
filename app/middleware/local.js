'use strict'

module.exports = (options, app) => {
  let assets = {}
  console.log('local')
  return async function (ctx, next) {
    await next()
  }
}