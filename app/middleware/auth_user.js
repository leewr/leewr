module.exports = () => {
  return async function (ctx, next) {
    // 验证是否登录
    // 添加全局变量数据 ctx.locals.current_user
    ctx.locals.current_user = null

    const { user } = ctx
    if (!user) {
      return await next()
    }
    console.log('user', user)
    ctx.locals.current_user = user
    await next()
  }
}