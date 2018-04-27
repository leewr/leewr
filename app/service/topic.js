const Service = require('egg').Service

class TopicService extends Service {

  /**
   *
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