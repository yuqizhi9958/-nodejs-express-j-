var express = require('express');
var app = express();
// 请求的url
var url = '/complex.json';
app.get(url, function(req, res) {
    //res.header("Access-Control-Allow-Origin", "*");
    //res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    //res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //res.header('Access-Control-Allow-Headers', 'Content-Type');
    // 默认返回的json 对象
    var obj = {
        "success": false
    }
    // 产生一个随机的金额模拟一下可用余额
    var money = Math.floor(Math.random()*10) + 5;

    // 如果请求中有参数 ‘types=ACCOUNT’
    if('types' in  req.query && req.query.types === 'ACCOUNT'){
	console.log(req.query)
        obj = {
            "ACCOUNT": {
                "avaiable": money,
                "freezeAmount": 0
            },
            "success": true
        };
    }
    res.jsonp(obj);
});

app.listen(4100);
