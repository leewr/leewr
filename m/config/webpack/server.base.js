const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const config = require('../index')

module.exports = {
  name: 'server',
  target: 'node',
  entry: {
    app: './src/server/index'
  },
  externals: [
    nodeExternals({
      // we still want imported css from external files to be bundled otherwise 3rd party packages
      // which require us to include their own css would not work properly
      whitelist: /\.css$/
    })
  ],
  output: {
    path: path.resolve(__dirname, '../../dist/server'),
    filename: 'server.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@': path.resolve('src'),
      Config: path.resolve('config/index')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader/locals' // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: 'sass-loader' // 将 Sass 编译成 CSS
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: `css-loader/locals`
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: 'true',
      __CLIENT__: 'false'
    })
  ]
}
