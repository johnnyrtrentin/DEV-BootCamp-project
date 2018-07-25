var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/welcome-page/welcome.html')
});

app.get('/welcome-page/*', function (req, res) {
    switch (req.url) {
        case '/welcome-page/welcome.css':
            res.sendFile(__dirname + '/welcome-page/welcome.css')
            break;
    }
});

app.get('/register-page', function (req, res) {
    res.sendFile(__dirname + '/register-page/register.html')
});

app.post('/register', function(req, res){
    var email = req.files.email
    var password = req.files.password
  
    console.log(email + " " + password)
   // With a veiw-engine - render the 'chat' view, with the username
   //res.render('chat', {username: username})

   res.redirect('/home-page/home.html')
  
  })

app.get('/login-page', function (req, res) {
    res.sendFile(__dirname + '/login-page/login.html')
});

app.listen(3000, function () {
    console.log('ONLINE!');
});