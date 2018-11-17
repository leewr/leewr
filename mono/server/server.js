const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const path = require('path');
const { render } = require('./render/render')

app.use(cookieParser());
app.use(bodyParser.json());

import App from '../src/App';
console.log(App)

var React = require('react'),
    ReactDOMServer = require('react-dom/server');

// var App = React.createFactory(require('../src/test'))

app.use((req, res, next) => {
	// const components = ReactDOMServer.renderToString((<App />))
	res.send('hello world')
})



app.listen("9000", function () {
	console.log('open Browser http://localhost:9000')
})