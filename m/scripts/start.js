const webpack = require('webpack')
const express = require('express')
const nodemon = require('nodemon')
const rimraf = require('rimraf')
const config = require('../config')

const clientConfig = require('../config/webpack/client.dev')
const serverConfig = require('../config/webpack/server.dev')

const compilerPromise = compiler => {
    return new Promise((resolve, reject) => {
        compiler.hooks.afterCompile.tap('done', state => {
            if (!state.hasErrors()) {
                return resolve()
            }
            return reject('Compilation failed')
        })
    })
}

const app = express()
const webpackPort = config.port + 1

const start = async () => {
    rimraf.sync('./dist')

    const clientCompiler = webpack([clientConfig, serverConfig])
    const srcipt = ''
    clientCompiler.run((err, state) => {
        console.log('stats', state.hasErrors())
        console.log('err', err)
        if (!state.hasErrors()) {
            srcipt = nodemon({
                srcipt: './dist/server/server.js',
                ignore: ['src', 'scripts', 'config', './*.*', 'build/client']
            })
        } else {
            console.log('err', err)
        }
    });
    const _clientCompiler = clientCompiler.compilers[0]
    const _serverCompiler = clientCompiler.compilers[1]

    //const clientPromise = compilerPromise(_clientCompiler)
    //const serverPromise = compilerPromise(_serverCompiler)

    app.use(express.static('../dist/client'))

    app.listen(webpackPort, () => {
        console.log('loaded')
    })

    // await serverPromise
    // await clientPromise



    // srcipt.on('restart', () => {
    //     console.log('Server side app has been restarted.')
    // })

}
start()