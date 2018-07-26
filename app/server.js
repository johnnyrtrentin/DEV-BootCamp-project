var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var clients = {};

app.use(express.static('public'));
app.use(express.static('app'));
app.use(express.static('node_modules'));


// app.get ('/', function (req,req) {
//     res.send('server is running');
// });

//socket
io.on("connection", function (client) {
    console.log('Usuário connectado.');
});

io.on("connection", function (client) {
    client.on("join", function (name) {
        console.log("Joined: " + name);
        clients[client.id] = name;
        client.emit("Update", "Você foi connectado no servidor.");
        client.broadcast.emit("Update", name + "entrou no servidor");
    })

    client.on("send", function (msg) {
        console.log("Message: " + msg);
        client.broadcast.emit("chat", client[client.id], msg);
    });

    client.on("disconnect", function () {
        console.log("Desconectado");
        io.emit("Update", clients[client.id] + "desconectou do servidor");
        delete clients[client.id];
    });
});

// http.listen (3000,function () {
//     console.log('online na 3000');
// }

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/welcome-page/welcome.html')
});

app.get('/chat-page', function (req, res) {
    res.sendFile(__dirname + '/chat-page/chat.html')
});

// app.get('/node_modules', function (req, res) {
//     res.sendFile(__dirname + '/node_modules/socket.io-client/dist/socket.io.js')
// })

app.get('/app', function (req,res) {
    res.sendDate(__dirname + '/app/client.js')
})

app.listen(3000, function () {
    console.log('ONLINE!');
});