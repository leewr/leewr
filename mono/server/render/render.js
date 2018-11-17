import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
// import App from '../../src/App';
// import { layout } from './layout';


module.exports.render = async(ctx, next) => {
	let body = 'hello world'
	ctx.body = body
}