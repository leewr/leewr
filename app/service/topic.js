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
    return result
  }


  /**
   * 新增文章
   */
  async newAndSave (title, content, summary, tab, authorId) {
    const result = await this.app.mysql.insert('article', 
      { 
        title, content, summary, tab, authorId, createTime: this.app.mysql.literals.now
      }
      );
    return result
  }

  /**
   * 保存文章
   */
  async save (id, title, content, summary, tab) {
    const row = {
      id,
      title,
      content,
      summary,
      tab,
      modifytime: this.app.mysql.literals.now
    }
    const result = await this.app.mysql.update('article', row)
    
    return result
  }

  /**
   * 增加阅读量
   */
  async addView (id) {
    return await this.app.mysql.query('update article set view = (view + ?) where id = ?', [1, id])
  }

  async topArticle (day) {
    return await this.app.mysql.query('select * from article where to_days(now()) - to_days(createtime) < ?', [day])
  }
}

module.exports = TopicService