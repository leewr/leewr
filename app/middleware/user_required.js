module.exports = () => {
  // 需要登录 userRequired
  return async function(ctx, next) {
    if (!ctx.user || !ctx.user.id) {
      ctx.body = {
        success: false,
        status: 403,
        message: '没有权限'
      }
      return
    }
    await next()
  }
}
