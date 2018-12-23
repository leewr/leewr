import express from 'express'
import path from 'path'

import React from "react"
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from "react-router-dom"
import { Provider as ReduxProvider } from "react-redux"


import App from './src/App'

const app = express()

app.get('/*', (req, res) => {
  const context = {}

  const dataRequirements = 
    routes
      .filter(route => matchPath(req.url, route))
      .map(route => route.component)
      .filter(comp => comp.serverFetch)
      .map(comp = store.dispatch(comp.serverFetch()))
  
  Promise.all(dataRequirements).then(() => {
    const jsx = (
      <ReduxProvider store={ store }>
        <StaticRouter context={ context } location={ req.url }>
          <Layout />
        </StaticRouter>
      </ReduxProvider>
    )
  })

  const html = renderToString(<App  />)
  console.log(html)
  res.end(htmlTemplate(html))
})

app.listen(3001, () => {
  console.log('server runned')
})

function htmlTemplate(reactDom) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>React SSR</title>
    </head>
    
    <body>
        <div id="app">${ reactDom }</div>
    </body>
    </html>
  `
}


 
