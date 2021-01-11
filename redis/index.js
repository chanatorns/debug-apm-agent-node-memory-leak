require('../apm');

var app = require('express')()
const Redis = require('ioredis');
new Redis();
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/mockApmServer*', function (req, res) {
  res.send('Hello World APM!')
})

app.listen(3000)