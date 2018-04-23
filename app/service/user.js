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
}

module.exports = userService