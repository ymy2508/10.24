var express = require('express');
var router = express.Router();
var fs = require('fs');
var dt=0;
var dt2=0;
/* GET home page. */
router.get('/', function(req, res, next) {
	dt++;
	fs.readFile('public/yu.txt','utf-8',function(err,data){
		if (err) {
			console.log(err)
		} else{
			console.log(data)
			fs.writeFile('public/yu.txt','index页面被访问的次数：'+dt,function(err){
				if(err){
					console.log(err)
				}
			})
			res.render('index', { title: data});
		}
	})

});

router.get('/index2', function(req, res, next) {
	dt2++;
	fs.readFile('public/yu2.txt','utf-8',function(err,data){
		if (err) {
			console.log(err)
		} else{
			console.log(data)
			fs.writeFile('public/yu2.txt','hyy页面:'+dt2,function(err){
				if(err){
					console.log(err)
				}
			})
			res.render('index2', { title: data});
		}
	})

});

module.exports = router;
