'use strict'
const Service = require('egg').Service

class Crawler extends Service {
    // 查询爬虫抓取列表信息
    async index() {
        const result = await this.app.mysql.query('select temparticle.cid from temparticle')
        return result
    }
    // 保存到抓取的temp库
    async save(info) {
        const {title, content, summary, cid, authorId, tab, createTime} = info
        const result = await this.app.mysql.insert('temparticle', 
            { 
                cid, title, content, summary, tab, authorId, createTime, modifyTime: this.app.mysql.literals.now
            }
        )
        return result
    }
    
    // 编辑临时文章
    async edit(id) {

    }

    // 保存到文章库
    async saveToArticle() {

    }
}

module.exports = Crawler