'use strict'

const Controller = require('egg').Controller

class signController extends Controller {
  async showLogin() {
    const { ctx } = this
    await ctx.render('/sign/signin', { pageTitle: '登录'})
  }

  async showSignup () {
    const { ctx } = this
    await ctx.render('sign/signup', { pageTitle: '注册'})
  }

  // 用户注册
  async signup() {
    const { ctx, service } = this
    const loginname = ctx.request.body.loginname
    const password = ctx.request.body.password
    const repassword = ctx.request.body.repassword
    let msg
    if ([loginname, password, repassword].some(item => {
      return item === ''
    })) {
      msg = '信息不完整'
    } else if(loginname.length < 5) {
      msg = '用户名长度不能小于5'
    } else if (password.length < 6) {
      msg = '密码长度不能小于5'
    } else if (password !== repassword) {
      msg = '两次密码不相等'
    }

    if (msg) {
      ctx.status = 422
      await ctx.render('sign/signup', {
        error: msg,
        loginname
      })
      return 
    }

    const users = await service.user.getUserQuery(loginname)

    console.log(users)

    if (users) {
      ctx.status = 422
      await ctx.render('sign/signup', {
        error: '用户名已被使用',
        loginname
      })
      return 
    }

    const pass = ctx.helper.bhash(password)
    // todo 产生随机用户头像
    const avatar_url = ''

    await service.user.addAndSave(loginname, loginname, pass, avatar_url, true)
    // 验证信息 突然想起第一次写asp的时候对照着源码学习
    // 获取表单信息
    // 验证是否为空
    // 验证是否合法
    // 错误信息提示
    // 获取用户名查询数据库是否同名
    // hashpass 对密码进行加密
    // todo 用户头像
    // service 添加一条数据保存
    
    // todo 邮箱验证
    // await ctx.render('sign/signup', {
    //   success: '欢迎加入' + this.config.name + '！我们已给您的注册邮箱发送了一封邮件，请点击里面的链接来激活您的帐号。',
    //   loginname
    // })
    // 跳转登录页面
    await ctx.render('sign/signin', {
       success: '注册成功，请重新登录'
    })
  }

  async signout() {
    console.log('signout')
    const { ctx } = this
    ctx.session = null
    // egg-passport api 
    // Exit and clear user information from session
    ctx.logout()
    ctx.redirect('/')
  }
}

module.exports = signController


