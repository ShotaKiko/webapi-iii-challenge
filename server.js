
const express = require('express')
const server = express();
const timeStamp = new Date()
server.use(logger)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} type, ${req.url} url, ${timeStamp} timestamp  `)
  next()
};



module.exports = server;
