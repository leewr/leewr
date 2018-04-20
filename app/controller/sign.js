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

  // 用户注册
  async signup() {
    // 验证信息 突然想起第一次写asp的时候对照着源码学习
    // 获取表单信息
    // 验证是否为空
    // 验证是否合法
    // 不合法信息提示
    // 获取用户名查询数据库是否同名
    // hashpass 对密码进行加密
    // todo 用户头像
    // service 添加一条数据保存
    // 跳转登录页面
  }

  async signout() {
    const { ctx } = this
    ctx.session = null
    // egg-passport api 
    // Exit and clear user information from session
    ctx.logout()
    ctx.render('/')
  }
}

module.exports = signController


