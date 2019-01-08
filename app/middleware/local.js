'use strict'

module.exports = (options, app) => {
  let assets = {}
  return async function(ctx, next) {
    await next()
  }
}
