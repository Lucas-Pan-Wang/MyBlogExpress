var express = require('express');
var {users,chapterList} = require('../data.json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',function(req,res){
  console.log(req.body.username)
  console.log(users[0].username);
  if(req.body.username === users[0].username && req.body.pwd === users[0].password){
    console.log('yes')
    res.redirect('/list');
  }else{
    res.send("用户名、密码输入错误")
  }
})

module.exports = router;
