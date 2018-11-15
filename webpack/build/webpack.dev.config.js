const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)
console.log(config.dev.host)

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	entry: {
	    app: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].[chunkhash].js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
            'vue': 'vue/dist/vue.js',
            '@': resolve('src'),
        }
	},
	devServer: {
	    contentBase: "./public", // since we use CopyWebpackPlugin.
	    host: HOST || config.dev.host,
	    port: PORT || config.dev.port,
	    open: true
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
		        test: /\.s?css$/,
		        use: [
		          'vue-style-loader',
		          'css-loader',
		          {
		            loader: 'sass-loader',
		            options: {
		              data: '$color: red;'
		            }
		          }
		        ]
		    },
			{
		        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          limit: 10000,
		          name: utils.assetsPath('img/[name].[hash:7].[ext]')
		        }
	      	}
		]
	},
	plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
	      filename: 'index.html',
	      template: 'index.html',
	      inject: true
	    })
    ]
}