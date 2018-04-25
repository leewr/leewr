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
    const { ctx, service } = this
    const { tabs } = this.config
    const { body } = ctx.request
    const allTabs = tabs.map( item => item[0])
    // 内容验证
    console.log(allTabs)
    const RULE_CREATE = {
      title: {
        type: 'string',
        max: 100,
        min: 5
      },
      content: {
        type: 'string'
      },
      tab: {
        type: 'enum',
        values: allTabs
      }
    }
    const error = ctx.validate(RULE_CREATE, ctx.request.body)
    console.log(error)
    // 数据库保存
    const topic = await service.topic.newAndSave(
      body.title,
      body.content,
      body.tab,
      ctx.user.id
    )
    // 增加用户帖子发表数量 increaseArticleCount
    await service.user.increaseArticleCount(ctx.user.id, 5, 1)
    await ctx.render('/topic/'+ topic.insertId)
  }
}

module.exports = TopicController
