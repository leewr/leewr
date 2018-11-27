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
    const { ctx, service } = this
    const pagination = ctx.pagination
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
    const { ctx, service } = this
    const id = ctx.params.id
    const topic = await service.crawler.getArticleById(id)
    // 数据库保存
    const result = await service.crawler.newAndSave(
      topic.title,
      topic.content,
      topic.summary,
      topic.tab,
      topic.authorId
    )
    // 增加用户帖子发表数量 increaseArticleCount
    await service.user.increaseArticleCount( topic.authorId, 1, 1)
    return result
  }
}

module.exports = Crawler