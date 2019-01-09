const base = require('./server.base')
const webpack = require('webpack')
const WriteFileWebpackPlugin = require('write-file-webpack-plugin')

module.exports = {
  ...base,
  plugins: [
    new WriteFileWebpackPlugin(),
    ...base.plugins,
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development'
}
