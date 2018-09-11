'use strict'

const Controller = require('egg').Controller

class commentController extends Controller {
	//  增加评论
    async add () {
		const { ctx, service } = this
		const content = ctx.request.body.content
    	const articleId = ctx.request.body.articleId
    	const authorId = ctx.request.body.authorId
    	let msg
    	if (!content) {
    		msg = '评论内容不能为空！'
    	} else if (!articleId) {
    		msg = '文章id不能为空！'
    	} else if (!authorId) {
    		msg = '评论作者id不能为空！'
    	}

    	if (msg) {
    		ctx.body = {
    			success: false,
    			status: 200,
    			message: msg
    		}
    		return
    	}
        const authorInfo = await service.user.getUserInfo(authorId)
    	const result = await service.comment.add(authorId, authorInfo.username, articleId, content)

    	if (result.protocol41) {
    		ctx.body = {
    			success: true,
    			status:200,
    			message: '评论成功'
    		}
    	} else {
    		ctx.body = {
    			success: false,
    			status: 507,
    			message: '评论失败'
    		}
    	}
	}

    // 评论点赞
    async thumbs () {
        const {ctx, service } = this
        const authorId = ctx.params.id
        const { body } = ctx.request
        const current_user = ctx.locals.current_user
        // let status = body.status ? body.status : 'ok'
        console.log('current_user', current_user)
        if (ctx.locals.current_user) {
            if (!body.commentId) {
                ctx.body = {
                    success: false,
                    status: 200,
                    message: '缺少commentId参数'
                }
                return
            }
            const retrunData = await service.comment.toggleThumbs(body.commentId, current_user.id)
            console.log('retrunData', retrunData)
            if (retrunData.success) {
                ctx.body = {
                    success: true,
                    status: 200,
                    data: {
                        status: retrunData.data.data
                    }
                }   
            } else {
                ctx.body = {
                    success: false
                }
            }
                
        } else {
            ctx.redirect('/signin')
            return
        }
    }
}

module.exports = commentController