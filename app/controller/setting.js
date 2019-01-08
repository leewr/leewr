'use strict'
const Controller = require('egg').Controller

class settingController extends Controller {
  async index() {
    const { ctx, service } = this
    const current_user = ctx.locals.current_user
    const settingIndex = await service.user.getUserSettingInfo(current_user.id)
    await ctx.render('/setting/index.tpl', { data: settingIndex })
  }

  async update() {
    const { ctx, service } = this
    const current_user = ctx.locals.current_user
    let { avatarUrl, username, email, sex, homePage, intro } = ctx.request.body
    let error
    if (intro) {
      intro = intro.trim()
    }
    if (username === '') {
      error = '用户名不能为空'
    } else if (username.length < 2 || username.length > 20) {
      error = '用户长度必须大于两个字符，小于20个字符'
    } else if (sex === '') {
      error = '性别不能为空'
    }
    if (error) {
      ctx.body = {
        success: true,
        status: 411,
        data: error
      }
      return
    }
    const result = await service.user.saveUserSettingInfo(
      current_user.id,
      avatarUrl,
      username,
      email,
      sex,
      homePage,
      intro
    )
    if (result.protocol41) {
      ctx.redirect('/setting/index')
    }
  }
}

module.exports = settingController
