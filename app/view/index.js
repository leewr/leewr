module.exports = class HomeController extends Controller {
  async render() {
    await this.ctx.render('index.js')
  }
}
