var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('app'));

app.get('/', function (req,res) {
    res.sendFile(__dirname + '/welcome-page/welcome.html')
});

app.listen(3000,function () {
    console.log('ONLINE!');
});