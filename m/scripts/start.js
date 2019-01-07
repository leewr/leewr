const webpack = require('webpack')
const express = require('express')
const nodemon = require('nodemon')
const rimraf = require('rimraf')

const compilerPromise = complier => {
    return new Promise((resolve, reject) => {
        complier.plugins('done', state => {
            if (!state.hasErrors()) {
                return resolve()
            }
            return reject('Compilation failed')
        })
    })
}



const app = express()
const webpackPort = config.port + 1

const start = async() => {
    rimraf.sync('./dist')
    
    const clientCompiler = webpack([clientConfig, serverConfig])

    const clientPromise = compilePromise(clientCompiler)
    const serverPromise = compilePromise(serverPromise)

    

    app.use(express.static('../dist/client'))

    app.listen(webpackPort)

    await serverPromise
    await clientPromise

    const srcipt = nodemon({
        srcipt: './dist/server/server.js',
        ignore: ['src', 'scripts', 'config', './*.*', 'build/client']
    })

    srcipt.on('restart', () => {
        console.log('Server side app has been restarted.')
    })

}
start()