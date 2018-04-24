const Controller = require('egg').Controller

class TopicController extends Controller {
  // 创建文章
  async create() {
    const { ctx, config } = this
    await ctx.render('/topic/edit.tpl', {
      tabs: config.tabs
    })
  }
  
  // 发表主题帖
  async put() {
    
  }
}

module.exports = TopicController
