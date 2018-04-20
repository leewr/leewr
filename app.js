'use strict'

module.exports = app => {
  console.log('app')
  const localHander = async (ctx, { username, password }) => {
    const getUser = username => {
      // todo email
      return ctx.service.user.getUserByLoginName(username)
    }
    
    const exitUser = await getUser(username)

    if (!exitUser) {
      console.log('not found')
      return null
    }

    const passHash = exitUser.password

    const equal = ctx.helper.bcompare(password, passHash)

    console.log(equal)
    
    if (!equal) {
      return null
    }

    // todo 用户激活
    if (!exitUser.active) {
      return null
    }

    return exitUser
  }

  app.passport.verify(async (ctx, user) => {
    const hander = localHander
    const exitUser = await hander(ctx, user)
    console.log(exitUser)
    if (exitUser) {
      // 设置cookie
      const auth_token = exitUser._id + '$$$$'
      const opts = {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 30,
        signed: true,
        httpOnly: true
      }
      ctx.cookie.set(app.config.auth_token_name, auth_token, opts)
    }
    return exitUser
  })

}