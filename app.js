var express = require('express')
    , app = express()
    , http = require('http')
    , server = http.createServer(app);

app.set('views', __dirname + '/views');

app.configure(function () {
    app.use(express.static(__dirname + '/public'));
});

app.get('/', function (request, response) {
    response.render('index.jade', {
        layout: false
    });
});

// start server

server.listen(8888);

// websockets
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log("un nuevo socket conectado");

    socket.on('sendMessage', function (data) {
        data.color = get_random_color();
        io.sockets.emit('newMessage', data);
    });
});

function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}