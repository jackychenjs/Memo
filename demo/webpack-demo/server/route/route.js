const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

const getCloudMusic = require('../controller/getCloudMusic');

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../index.html'));
})

router.post('/api/getCloudMusic', function() {
    getCloudMusic();
})

//var viewPath = path.join(__dirname, 'views');

// router.get('/', function(req, res, next){
//     res.render('index');
// });

/*
1、例如：127.0.0.1:3000/index，这种情况下，我们为了得到index，我们可以通过使用req.params得到，通过这种方法我们就可以很好的处理Node中的路由处理问题，同时利用这点可以非常方便的实现MVC模式；
2、例如：127.0.0.1:3000/index?id=12，这种情况下，这种方式是获取客户端get方式传递过来的值，通过使用req.query.id就可以获得，类似于PHP的get方法；
3、例如：127.0.0.1:3000/index，然后post了一个id=2的值，这种方式是获取客户端post过来的数据，可以通过req.body.id获取，类似于PHP的post方法；
*/

// router.get('/demo/:demoModule/:demoPage', function(req, res, next){
//     var demoModule = req.params.demoModule,
//         demoPage = req.params.demoPage;
//     res.render('demo/' + demoModule + '/' + demoPage);
// });


// router.post('/data/:dataModule', function(req, res, next){
//     var dataModule = req.params.dataModule;
//         Action = require('../action/' + dataModule);
//     //console.log(dataModule);
//     Action.excute(req, res);
// });


module.exports = router;