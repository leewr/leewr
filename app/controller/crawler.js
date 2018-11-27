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
    console.log(id)
    const topic = await service.crawler.getArticleById(id)
    ctx.body = topic
  }
}

module.exports = Crawler