module.exports = (option, app) => {
  return async function(ctx, next) {
    try {
      await next()
    } catch (err) {
      ctx.app.emit('error', err, ctx)
      const status = err.status || 500
      const error =
        status === 500 && ctx.app.config.env === 'prod'
          ? 'Internal Server Error'
          : err.message

      ctx.body = {
        success: false,
        status: status,
        message: error
      }
      console.log('error_handler')
      // 将所有请求转变为正确
      ctx.status = 200
    }
  }
}
