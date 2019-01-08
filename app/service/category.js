const Service = require('egg').Service

class categoryService extends Service {
  async add(categoryName, parentId, authorId) {
    const result = await this.app.mysql.insert('category', {
      categoryName,
      parentId,
      authorId,
      createTime: this.app.mysql.literals.now
    })
    return result
  }

  async save(id, authorId, categoryName) {
    const row = {
      id,
      authorId,
      categoryName,
      modifyTime: this.app.mysql.literals.now
    }
    const result = await this.app.mysql.update('category', row)
    return result
  }

  async get(authorId) {
    const result = await this.app.mysql.get('category', {
      authorId: authorId
    })
  }
}

module.exports = categoryService
