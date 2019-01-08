'use strict'
const Service = require('egg').Service

class Crawler extends Service {
  // 查询爬虫抓取列表信息
  async index() {
    const result = await this.app.mysql.query(
      'select temparticle.cid from temparticle'
    )
    return result
  }

  async list() {
    const result = await this.app.mysql.query('select * from temparticle')
    return result
  }

  async getList(pagination) {
    const { ctx } = this
    pagination = pagination || { limit: 10, skip: 0 }
    let params = {
      orders: [['createTime', 'desc'], ['id', 'desc']],
      limit: pagination.limit,
      offset: pagination.skip
    }
    let result, totalCount
    result = await this.app.mysql.select('temparticle', params)
    totalCount = await this.app.mysql.count('temparticle')
    return {
      list: result,
      currentPage: Number(pagination.skip),
      pages: Math.ceil(totalCount / pagination.limit),
      total: totalCount
    }
  }

  // 保存到抓取的temp库
  async save(info) {
    const { title, content, summary, cid, authorId, tab, createTime } = info
    const result = await this.app.mysql.insert('temparticle', {
      cid,
      title,
      content,
      summary,
      tab,
      authorId,
      createTime,
      modifyTime: this.app.mysql.literals.now
    })
    return result
  }
  async getArticleById(id) {
    const result = await this.app.mysql.get('temparticle', { id: id })
    return result
  }
  // 编辑临时文章
  async edit(id) {}

  // 保存到文章库
  async newAndSave(data) {
    console.log(data)
    debugger
    const {
      title,
      content,
      summary,
      tab,
      authorId,
      createTime,
      cid,
      imgUrl
    } = data
    const result = await this.app.mysql.insert('article', {
      title,
      content,
      summary,
      tab,
      authorId,
      cid,
      from: 'jianshu',
      imgUrl,
      createTime,
      modifyTime: this.app.mysql.literals.now
    })
    // 更新状态不能重复入库
    const res = await this.app.mysql.update('temparticle', {
      id: data.id,
      isPost: 1
    })
    return result
  }
}

module.exports = Crawler
