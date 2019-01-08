'use strict'

const Controller = require('egg').Controller
const article = require('./article.js')

class singlePages extends Controller {
  async links() {
    const { ctx, service } = this
    await article.getArticle(ctx, 26, service)
  }
  async help() {
    const { ctx, service } = this
    await article.getArticle(ctx, 27, service)
  }
  async timeline() {
    const { ctx, service } = this
    await article.getArticle(ctx, 28, service)
  }
  async about() {
    const { ctx, service } = this
    await article.getArticle(ctx, 29, service)
  }
}

module.exports = singlePages
