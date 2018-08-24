const Service = require('egg').Service

class userService extends Service {
  /**
   * 根据登录名查找用户
   * @param {*} username 
   */
  getUserByLoginName(username) {
    const query = { username: username }
    return this.app.mysql.get('user', query)
  }

  /**
   * 登录时用户名重复查询
   * @param {*} username 
   */
   getUserQuery (username) {
    const query = { username: username}
    return  this.app.mysql.get('user', query)
  }

  /**
   * 保存新增用户
   */
  addAndSave(name, username, password, avatar_url, active) {
    const row = {
      name,
      username,
      password,
      avatar_url,
      active
    }
    const result = this.app.mysql.insert('user', row)
    console.log('result:' + result)
    return result
  }
  /**
   * 用户表增加文章数量
   */
  async increaseArticleCount (authorId) {
    const result = await this.app.mysql.query('update user set articleNum = (articleNum + ?) where id = ?', [1, authorId])
    console.log(result.affectedRows)
    const updateSuccess = result.affectedRows === 1
    console.log('increaseArticleCount:' + updateSuccess)
  }

  /**
   * 获取用户信息
   */
  async getUserInfo(authorId) {
    //const result = await this.app.mysql.query('select username, avatar_url, articleNum from user where id = ?', [authorId])
    const result = await this.app.mysql.get('user', { 
      id: authorId
    },
    {
      columns: ['id', 'username', 'avatar_url', 'articleNum']
    })
    return result
  }
}

module.exports = userService