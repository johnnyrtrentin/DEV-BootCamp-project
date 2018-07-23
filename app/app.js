var express = require('express');
var app = express();

app.get('/', function (req,res) {
    res.sendFile(__dirname + '/login-page/login.html')
});

app.listen(3000,function () {
    console.log('UP NO 3000!');
});