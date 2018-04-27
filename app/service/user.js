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

  async increaseArticleCount (authorId, score, num) {
    const result = await this.app.mysql.query('update user set score = (score + ?) where id = ?', [score, authorId])
    console.log(result.affectedRows)
    const updateSuccess = result.affectedRows === 1
    console.log('increaseArticleCount:' + updateSuccess)
  }
}

module.exports = userService