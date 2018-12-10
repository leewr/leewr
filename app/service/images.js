const Service = require('egg').Service
const fs = require('fs')
const webp=require('webp-converter');

class Images extends Service {
  async save(originUrlPath, targetPath, fileName, date) {
    const { ctx } = this
    const cid = ctx.helper.uuid(14)
    console.log(originUrlPath, targetPath)
    if (!fs.existsSync(targetPath)) {
      fs.mkdir(targetPath)
    }
    // 移动图片
    await fs.rename(originUrlPath, targetPath + '/' + fileName, async (err) => {
      if (err) throw err;
      // 生成webp图片
      webp.cwebp(targetPath + '/' + fileName, targetPath + '/' + fileName + '.webp', '-q 80', function(status){
        if (status === 100) {
          this.app.mysql.insert('images', { 
            originUrl: `/public/upload/${date}/${fileName}`, cid, createTime: this.app.mysql.literals.now, modifyTime: this.app.mysql.literals.now
          })
        }
      })
    })
  }

  async index(pagination) {
    pagination = pagination || {limit: 10, skip: 0}
    let params = {
      orders:[['createTime','desc'], ['id', 'desc']],
      limit: pagination.limit,
      offset: pagination.skip
    }
    let result, totalCount
        result =  await this.app.mysql.select('images', params)
        totalCount = await this.app.mysql.count('images')
    return {
        list: result,
        currentPage: Number(pagination.skip/pagination.limit),
        pages: Math.ceil(totalCount/pagination.limit),
        total: totalCount
    }
  }

  // 查看单个图片信息好像没有具体的作用
  async show(id) {
    const result = await this.app.mysql.get('images', {id})
    return result
  }
}

module.exports = Images