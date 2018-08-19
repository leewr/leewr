'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
  	const { ctx, service } = this
  	const topis = await service.topic.getArticleList()
  	console.log(topis)
    await this.ctx.render('home/index.tpl', {data: topis})
  }
}

module.exports = HomeController;
