'use strict';

const fs = require('fs')
const path = require('path')
const Controller = require('egg').Controller
const pump = require('mz-modules/pump')

class UploadFormController extends Controller {
  async upload() {
    const { ctx } = this
    const stream = await this.ctx.getFileStream();
    const filename = encodeURIComponent(ctx.helper.uuid(12, 4)) + path.extname(stream.filename).toLowerCase()
    const target = path.join(this.config.baseDir, 'app/public/temp', filename)
    const writeStream = fs.createWriteStream(target)
    await pump(stream, writeStream)
    // 入库images
    ctx.body = {
      success: true,
      status: 200,
      data: '/public/temp/' + filename
    }
  }
}

module.exports = UploadFormController
