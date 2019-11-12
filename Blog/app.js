const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var listRouter = require('./routes/list');
var data = require('./data.json');
var app = express();

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


app.use('/', indexRouter);
// app.use('/list', listRouter);

app.post('/',function(req,res){
  console.log(req.body.username)
  console.log(data.users[0].username);
  if(req.body.username === data.users[0].username && req.body.pwd === data.users[0].password){
    console.log('yes')
    res.render('list',{chapterList: data.chapterList})
  }else{
    res.send("用户名、密码输入错误")
  }
})

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
