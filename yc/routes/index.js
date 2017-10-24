var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var data=fs.readFileSync('public/index.txt','utf-8');
  data=data.split('：');
  data=data[1];
  data++;
    
  fs.writeFile('public/index.txt','index页面被访问的次数为：'+data,function(err){
    res.render('index',{ming:data});
  })
});


router.get('/yc', function(req, res, next) {
  var data=fs.readFileSync('public/yc.txt','utf-8');
  data=data.split('：');
  data=data[1];
  data++;
    
  fs.writeFile('public/yc.txt','yc页面被访问的次数为：'+data,function(err){
    res.render('yc',{ming:data});
  })
});

module.exports = router;
