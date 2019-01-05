const dev = process.env.NODE_ENV !== 'production'
const path = require('path')
const { BundleAnalyzerPlugin } = require( "webpack-bundle-analyzer" )
const FriendlyErrorsWebpackPlugin = require( "friendly-errors-webpack-plugin" );

const plugins = [
    new FriendlyErrorsWebpackPlugin()
]

if (!dev) {
    plugins.push( new BundleAnalyzerPlugin( {
        analyzerMode: "static",
        reportFilename: "webpack-report.html",
        openAnalyzer: false
    } ) )
}

module.exports = {
    mode: dev ? 'development': 'production',
    context: path.join(__dirname, "src"),
    devtool: dev ? "none" : source-map,
    entry: {
        app: './client.js'
    }
}