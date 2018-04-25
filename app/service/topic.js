const Service = require('egg').Service

class TopicService extends Service {
  async newAndSave (title, content, tab, authorId) {
    const result = await this.app.mysql.insert('article', { title, content, tab, authorId });
    console.log(result)
  }
}

module.exports = TopicService