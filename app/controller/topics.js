const Controller = require('egg').Controller

class TopicsController extends Controller {
  constructor(ctx) {
    super(ctx)
    this.createRule = {
      accesstoken: 'string',
      title: 'string',
      tab: { type: 'enum', values: ['ask', 'share', 'job'], required: false },
      content: 'string'
    }
  }
  async show() {
    const { ctx } = this
    ctx.body = await ctx.service.topics.show({
      id: ctx.params.id,
      mdrender: ctx.query.mdrender !== 'false',
      accesstoken: ctx.query.accesstoken || ''
    })
  }
  async index() {
    const { ctx } = this
    ctx.validate(
      {
        page: { type: 'string', format: /\d+/, required: false },
        tab: {
          type: 'enum',
          values: ['ask', 'share', 'job', 'good'],
          required: false
        },
        limit: { type: 'string', format: /\d+/, required: false }
      },
      ctx.query
    )

    ctx.body = await ctx.service.topics.list({
      page: ctx.query.page,
      tab: ctx.params.id,
      limit: ctx.query.limit,
      mdrender: ctx.query.mdrender !== 'fase'
    })
  }
  async create() {
    const ctx = this.ctx
    ctx.validate(createRule)
    const id = await ctx.service.topics.create(ctx.request.body)
    ctx.body = {
      topic_id: id
    }
    ctx.status = 201
  }
}

module.exports = TopicsController
