'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
  	const { ctx, service, app } = this
	const agent = ctx.request['headers']['user-agent'].toLowerCase()
	console.log(app.config.env)
  	if (agent.match(/iphone|ipod|ipad|android/)) {
		console.log('跳转到移动站')
		
		await ctx.redirect('http://m.leewr.com')
		
		return
  	} else {
  		const topis = await service.topic.getArticleList()
    	await this.ctx.render('home/index.tpl', {data: topis})
  	}
  }
}

module.exports = HomeController;
