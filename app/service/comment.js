const Service = require('egg').Service

class commentService extends Service {
	async add(authorId, authorName, articleId, content) {
		const { ctx } = this
		const cid = ctx.helper.uuid(14)
		const result = await this.app.mysql.insert('comment', {
			cid, authorId, articleId, content, createTime: this.app.mysql.literals.now, modifyTime: this.app.mysql.literals.now, authorName
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

	async list(articleId, pagination) {
		pagination = pagination || {limit: 10, skip: 0}
		let params = {
			orders: [['createTime', 'desc'], ['id', 'desc']],
			limit: pagination.limit,
      		offset: pagination.skip,
      		where: {articleId: parseInt(articleId)}
		}
		const result = await this.app.mysql.select('comment', params)
		return result
	}

	/*
	* 评论点赞
	*/
	async toggleThumbs(cid, userId) {
		let status = await this.app.mysql.query('update thumbs set status = !status, modifyTime = now() where articleId = ? and userId = ?', [cid, userId])
		if (!status.changedRows) {
	      status = await this.app.mysql.query('insert into thumbs values(0, ?, ?, now(), now(), 1)', [cid, userId])
	    }
		console.log(status)
	    // 更新评论表中点赞数量
	    const data = await this.app.mysql.get('thumbs', {
	      articleId: cid,
	      userId: userId
		})
		console.log('data', data)
		const add = await this.app.mysql.query('update comment set thumbs = (thumbs + ?) where cid = ?', [data.status ? 1 : -1, cid])
		console.log('add', add)
	    return {
	    	success: add.changedRows,
	    	status: data.status
	    }
	}
}

module.exports = commentService