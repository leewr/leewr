const webpack = require('webpack')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const chalk = require('chalk')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const config = require('../index')
const devMode = process.env.NODE_ENV === 'development'

module.exports = {
    name: 'client',
    target: 'web',
    entry: {
        app: ['@babel/polyfill', './src/client/index.js']
    },
    output: {
        path: path.resolve(__dirname, '../../dist/client'),
        filename: devMode ? '[name].bundle.js' : '[name].[hash].js',
        publicPath: '',
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
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'css-hot-loader',
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[hash:base64:8]',
                            minimize: true,
                            sourceMap: true,
                            importLoaders: 1
                          }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            // css 解析
            {
                test: /\.css$/,
                use: [
                    'css-hot-loader',
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: `css-loader`
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __SERVER__: 'false',
            __CLIENT__: 'true'
        }),
        // 提取css插件
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css'
        }),
    ]

}
