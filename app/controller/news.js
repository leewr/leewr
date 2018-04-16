const Controller = require('egg').Controller

class NewController extends Controller {
  async list() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' }
      ]
    }
    const ctx = this.ctx
    const page = ctx.query.page || 1
    const newList = await ctx.service.news.list(page, 20)
    await this.ctx.render('news/list.tpl', {list: newList})
  }

  async detail() {
    const ctx = this.ctx
    const id = ctx.params.id
    console.log(id)
    const detail = await ctx.service.news.detail(id)
    console.log(detail)
    await this.ctx.render('news/detail.tpl', {detail})
  }
}

module.exports = NewController