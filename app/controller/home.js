'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('home/index.tpl', )
  }
}

module.exports = HomeController;
