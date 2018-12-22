'use strict';
const Controller = require('egg').Controller
const moment = require('moment')
const path = require('path')
const fs = require('fs')

class Crawler extends Controller {
  // 文章列表
  async index() {
    const { ctx, service } = this
    const pagination = ctx.pagination
    const topis = await service.crawler.index(pagination)
    
    ctx.body = topis
  }
  async getList() {
    const { ctx, service, controller } = this
    const pagination = ctx.pagination
    console.log(controller)
    const topis = await service.crawler.getList(pagination)
    ctx.body = topis
  }

  // 单篇文章
  async view() {
    const { ctx, service } = this
    const id = ctx.params.id
    const topic = await service.crawler.getArticleById(id)
    const userInfo = await service.user.getUserInfo(topic.authorId)
    let data = Object.assign(topic, { userInfo: userInfo})
    ctx.body = data
  }

  // 保存文章
  async save() {
    const { ctx, service, controller } = this
    const id = ctx.params.id
    // 参数有安全性
    const imgUrl = ctx.request.body.imgUrl

    console.log(ctx.request.body)
    if (!imgUrl)  {
      ctx.body = '缺少必要参数'
      ctx.status = 412
      return
    }
    console.log('imgUrl', imgUrl)
    let topic = await service.crawler.getArticleById(id)
    
    // topic.imgUrl = imgUrl
    console.log('imgUrl', topic.imgUrl)
    let data

    // 数据库保存
    if (!topic.isPost) {
      for (let i = 0; i < 5; i++) {
        this.app.redis.del(`indexList-${i + 1}`)
        console.log(i)
      }
      // 先处理图片、再保存文章
      const fileName = imgUrl.substr(imgUrl.lastIndexOf('/') + 1)
      const date = moment().format('YYYY-MM-DD')
      const targetPath = path.join(this.config.baseDir, `app/public/upload/${date}`)
      let originUrlPath = path.join(this.config.baseDir, `app/${imgUrl}`)
      // 当图片已经是upload中的时候，不再存数据库
      if (!fs.existsSync(path.join(this.config.baseDir, `app/public/upload/${date}/${fileName}`))) {
        service.images.save(originUrlPath, targetPath, fileName, date)
      }
      topic.imgUrl = `/public/upload/${date}/${fileName}`
      data = await service.crawler.newAndSave(topic)
      // 增加用户帖子发表数量 increaseArticleCount
      await service.user.increaseArticleCount(topic.authorId, 1, 1)
      ctx.body = data.message
    } else {
      ctx.body = '不能重新入库'
      ctx.status = 412
    }
  }
}


module.exports = Crawler