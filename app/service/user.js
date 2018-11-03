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
  addAndSave(name, username, password, avatarUrl, active) {
    const row = {
      name,
      username,
      password,
      avatarUrl,
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
    console.log('用户id', authorId)
    const result = await this.app.mysql.get('user', { 
      id: authorId
    },
    {
      columns: ['id', 'username', 'avatarUrl', 'articleNum', 'followNum', 'fansNum', 'likeNum', 'intro', 'worldNum']
    })
    return result
  }
  /**
   * 获取用户设置信息 
   */
  async getUserSettingInfo (authorId) {
    const result = await this.app.mysql.get('user', {
        id: authorId
      },
      {
        columns: ['avatarUrl', 'username', 'email', 'sex', 'homePage', 'intro']
      }
    )
    return result
  }
  async saveUserSettingInfo (id, avatarUrl, username, email, sex, homePage, intro) {
    const result = await this.app.mysql.update('user', {
      id,
      avatarUrl,
      username,
      email,
      sex,
      homePage,
      intro
    })
    return result
  }
  /**
   * 关注状态
   */
  async toggleFollow(authorId, current_user) {
    // 关注表添加一条记录
    let followStatus = await this.app.mysql.query('update follow set status = !status, modifyTime = now() where userId = ? and followedUser = ?', [authorId, current_user.id])
    if (!followStatus.changedRows) {
      followStatus = await this.app.mysql.query('insert into follow values(0, ?, ?, 1, now(), now())', [authorId, current_user.id])
    }

    // 粉丝表添加一条记录
    // let fanStatus = await this.app.mysql.query('update fans set status = !status, modifyTime = now() where userId = ? and follower = ?', [authorId, current_user.id])
    // if (!fanStatus.changedRows) {
    //   fanStatus = await this.app.mysql.query('insert into fans values(0, ?, ?, 1, now(), now())', [authorId, current_user.id])
    // }

    // 更新用户信息表添加一个粉丝/关注数量
    const status = await this.app.mysql.get('follow', {
      userId: authorId,
      followedUser: current_user.id
    })

    await this.app.mysql.query('update user set fansNum = (fansNum + ?) where id = ?', [status.status ? 1 : -1, authorId])
    await this.app.mysql.query('update user set followNum = (followNum + ?) where id = ?', [status.status ? 1 : -1, current_user.id])

    return followStatus
  }
  
  /**
   * 是否关注
   * getFollowStatus
   */
  async getFollowStatus (authorId, current_user) {
    const status = await this.app.mysql.get('follow', {
      userId: authorId,
      followedUser: current_user.id
    })
    return status
  }

  /**
   * 是否喜欢
   */
  async getLikeStatus (articleId, current_user) {
    const status = await this.app.mysql.get('thumbs', {
      articleId: articleId,
      userId: current_user.id
    })
    return status
  }

  /**
   * 关注数量
   */
  async followNun (current_user) {
  }

  /**
   * 更新作者喜欢数
   */
  async like (status, authorId) {
    await this.app.mysql.query('update user set likeNum = (likeNum + ?) where id = ?', [status ? 1 : -1, authorId])
  }
}

module.exports = userService