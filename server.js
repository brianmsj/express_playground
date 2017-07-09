const express = require('express');
const app = express();

function logger(req,res,next) {
  console.log((new Date(), req.method, req.url));
  next()
}

function hello(req,res,next) {
  res.write('Hello World')
  next()
}
function goodbye(req,res,next) {
  res.write('GoodBye World')
  res.end()
}

app.use(logger);
app.get('/hello',hello,goodbye)


const server = app.listen(3000)
console.log('server is listening')
