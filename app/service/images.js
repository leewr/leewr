const Service = require('egg').Service
const path = require('path')
const fs = require('fs')

class Images extends Service {
  async save(originUrl) {
    const cid = ctx.helper.uuid(14)
    const result = await this.app.mysql.insert('image', 
      { 
        originUrl, editedUrl, cid, createTime: this.app.mysql.literals.now, modifyTime: this.app.mysql.literals.now
      }
    )
    // 文件夹判断
    const date = moment().format('YYYY-MM-DD')
    const targetPath = path.join(this.config.baseDir, `app/public/${date}`)
    fs.exists(patargetPathth, (exists) => {
        if (!exists) {
            fs.mkdir(`./${date}`)
        } else {
            //移动文件
            fs.rename()
        }
    })
    return result
  }
}

module.exports = Images