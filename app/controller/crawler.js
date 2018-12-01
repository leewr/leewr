'use strict';
const Controller = require('egg').Controller

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
    const imgUrl = ctx.request.body.imgUrl
    console.log(ctx.request.body)
    if (!imgUrl)  {
      ctx.body = '缺少必要参数'
      ctx.status = 412
      return
    }
    console.log('imgUrl', imgUrl)
    let topic = await service.crawler.getArticleById(id)
    
    topic.imgUrl = imgUrl
    console.log('imgUrl', topic.imgUrl)
    let data
    // 数据库保存
    if (!topic.isPost) {
      data = await service.crawler.newAndSave(topic)
      // 图片操作，将temp中图片移动到待日期的文件夹中yyyyMM中的文件夹中
      
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