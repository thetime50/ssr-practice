import express from 'express'
import {
  createSSRApp
} from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createApp } from './app.js'


const PORT = 3000

const server = express()

server.get('/exapmle', (req, res) => {
  const app = createSSRApp({
    data: () => ({
      count: 1
    }),
    template: `<button @click="count++">{{ count }}</button>`
  })

  renderToString(app).then((html) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `)
  })
})


server.get('/', (req, res) => {
  const app = createApp()
  renderToString(app).then(html => {
    // https://github.com/WICG/import-maps
        res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
        <script type="importmap">
          {
            "imports": {
              "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
            }
          }
        </script>
        <script type="module" src="/src/client.js"></script>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `)
  })
})

server.use(express.static('.'))

server.listen(PORT, () => {
  console.log('ready')
  console.log(`App running at: http://localhost:${PORT}`, )
})

