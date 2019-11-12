var express = require('express');
var {users,chapterList} = require('../data.json');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('list',{items:chapterList});
});

module.exports = router;
