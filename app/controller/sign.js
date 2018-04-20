'use strict'

const Controller = require('egg').Controller

class signController extends Controller {
  async showLogin() {
    const { ctx } = this
    await ctx.render('/sign/signin', { pageTitle: '登录'})
  }

  async showSignup () {
    const { ctx } = this
    await ctx.render('/sign/signup', { pageTitle: '注册'})
  }

  async signup() {
    
  }
}

module.exports = signController


