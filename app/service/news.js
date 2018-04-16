const Service = require('egg').Service

class NewService extends Service {
  async list(page = 1, pageSize = 10) {
    const { serverUrl } = this.config.News
    const { data: idList } = await this.ctx.curl(`${serverUrl}/topics`,{
      data: {
        page: page,
        tab: 'ask',
        limit: pageSize
      },
      dataType: 'json'
    })

    return idList;
  }

  async detail(id) {
    const {serverUrl} = this.config.News
    const {data: detail} = await this.ctx.curl(`${serverUrl}/topic/${id}`,{dataType: 'json'})
    return detail
  }
}

module.exports = NewService