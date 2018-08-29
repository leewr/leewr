'use strict'
const Controller = require('egg').Controller

class settingController extends Controller {
	
	async index() {
		const { ctx} = this
	    	await ctx.render('/setting/index.tpl', {
	    })
	}
}

module.exports = settingController