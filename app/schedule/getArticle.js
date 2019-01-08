const Subscription = require('egg').Subscription
const superagent = require('superagent')
const cheerio = require('cheerio')
const nodemailer = require('nodemailer')
const moment = require('moment')

class getArticle extends Subscription {
  constructor(props) {
    super(props)
    this.page = 1
    this.count = 10
    this.totalSize = 0
    ;(this.finishedIndex = 0), (this.pageFinish = false)
  }
  static get schedule() {
    return {
      cron: '0 24 0 * * *', // 每天 12：30执行定时任务
      // interval: '20s',
      type: 'all'
    }
  }

  async getDetail(res, resolve) {
    const { ctx } = this
    let index = setInterval(async () => {
      if (this.finishedIndex === res.data.length) {
        this.pageFinish = true
        clearInterval(index)
        this.page++
        this.finishedIndex = 0
        resolve(res)
        return
      }
      ctx.logger.info('this.finishedIndex', this.finishedIndex)
      ctx.logger.info(
        'res.data[this.finishedIndex].object',
        res.data[this.finishedIndex].object
      )
      let obj = res.data[this.finishedIndex].object
      let result = await this.ctx.curl(
        `https://www.jianshu.com/asimov/p/${obj.data.slug}`,
        {
          method: 'GET',
          dataType: 'json'
        }
      )
      let data = result.data
      let info = {
        title: data.public_title,
        content: data.free_content,
        summary: data.description,
        cid: data.slug,
        authorId: 1,
        tab: 'article',
        createTime: data.first_shared_at
      }
      try {
        let cids = await this.service.crawler.index()
        let status = cids.some((i, index) => {
          return i.cid === data.slug
        })
        if (!status) {
          this.ctx.logger.info('crawler', info.title)
          await this.service.crawler.save(info)
        } else {
        }
        console.log(info.title)
        this.finishedIndex++
      } catch (err) {
        console.log(err)
      }
    }, 2000)
  }
  async subscribe() {
    console.log('this.page', this.page)
    let that = this
    let middle = []
    // 获取所有文章长度
    let res = await that.ctx.curl(
      `https://www.jianshu.com/asimov/notebooks/679554/public_notes?page=${
        that.page
      }&count=1000`,
      {
        dataType: 'json',
        timeout: '10000'
      }
    )
    this.pageSize = res.data.length
    for (let i = 0; i < this.pageSize / this.count; i++) {
      middle.push(function() {
        return new Promise(async resolve => {
          let res = await that.ctx.curl(
            `https://www.jianshu.com/asimov/notebooks/679554/public_notes?page=${
              that.page
            }&count=${that.count}`,
            {
              dataType: 'json'
            }
          )
          await that.getDetail(res, resolve)
        })
      })
    }

    this.asyn(middle, () => {
      that.postMail()
      console.log('length', that.totalSize)
    })
  }

  asyn(arr, cb) {
    arr.reduce((p, func) => p.then(func), Promise.resolve()).then(cb)
  }

  postMail() {
    const { ctx } = this
    let transporter = nodemailer.createTransport({
      service: 'qq',
      port: 465,
      secureConnection: true,
      auth: {
        user: '121657771@qq.com',
        pass: 'nnxybiwrfcfhbgia'
      }
    })
    let html =
      this.app.config.env !== 'local'
        ? 'http://localhost:3000/crawlers'
        : 'http://m.leewr.com/crawlers'
    let mailOptions = {
      from: '"liwenrun" <121657771@qq.com>',
      to: 'liwenrunwj65423@touna.cn',
      subject: `[${moment().format('L')}] 日新的信息已经入库`,
      html: `页面已经生成 ${html} ，快去上传图片发布吧！`
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return ctx.logger.info('Email Send error', error)
      }
      ctx.logger.info('Message sent: %s', info.messageId)
    })
  }
}

module.exports = getArticle
