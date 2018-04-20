const Service = require('egg').Service

class userService extends Service {
  /**
   * 根据登录名查找用户
   * @param {*} username 
   */
  getUserByLoginName(username) {
    const query = { username: username }
    console.log(this.app.mysql.get('user', query))
    return this.app.mysql.get('user', query)
  }
}

module.exports = userService