require('../apm');
const http = require('http');
// const apm = require('elastic-apm-node');
// const apm = require('./node_modules/elastic-apm-node');
// const apm = require('../apm-agent-node-fork');

// console.log(apm)

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url)
  if (req.url === '/test') {
    return res.end('test');
  }

  if (req.url === '/mockApmServer') {
    return res.end('mockApmServer');
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//RESULT : 
//asyncHooks enable has no problem
//asyncHooks disable has memory leak