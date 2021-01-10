require('../apm');
const express = require('express')
const next = require('next')

const port = 3000
// eslint-disable-next-line no-undef
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

app.prepare().then(() => {
  const server = express()

  server.all('*', (req, res) => {
    res.send('hello next express')
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})