const Service = require('egg').Service

class TopicService extends Service {
  /**
   * 获取文章列表
   */
  async getArticleList() {
    const result = await this.app.mysql.select('article', {
      orders:[['createTime','desc'], ['id', 'desc']],
      limit: 10,
      offset: 0
    })
    return result
  }

  /**
   * 获取文章
   */
  async getArticleById(id) {
    const result = await this.app.mysql.get('article', {id: id})
    console.log('getById: ' + result.id)
    return result
  }


  /**
   * 新增文章
   */
  async newAndSave (title, content, tab, authorId) {
    const result = await this.app.mysql.insert('article', { title, content, tab, authorId });
    console.log(result)
    return result
  }

  /**
   * 保存文章
   */
  async save (id, title, content, tab) {
    const row = {
      id,
      title,
      content,
      tab,
      modifytime: this.app.mysql.literals.now
    }
    const result = await this.app.mysql.update('article', row)
  }

}

module.exports = TopicService