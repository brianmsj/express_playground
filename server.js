const express = require('express');
const app = express();

function logger(req,res,next) {
  res.write(new Date())
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


const server = app.listen(8080)
