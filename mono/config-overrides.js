const { injectBabelPlugin } = require('react-app-rewired');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
    if (env === "production") {
        config.plugins = (config.plugins || []).concat([
            new CompressionPlugin({
                filename: "[path].gz[query]",
                algorithm: "gzip",
                test: /\.(js|css|html)$/,
                threshold: 10240,
                minRatio: 1
              })
        ])
    }
    return config;
};