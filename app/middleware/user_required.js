
module.exports = () => {
  // 需要登录 userRequired
  return async function (ctx, next) {
    if (!ctx.user || !ctx.user.id) {
      ctx.status = 403
      ctx.body = 'forbidden'
      return
    }
    await next()
  }
}