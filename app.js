var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);

app.set('views', __dirname + '/views');
app.configure(function () {
	app.use(express.static(__dirname));
});
app.get('/', function (request, response) {
	response.render('index.jade', {layout: false});
});
server.listen(8888);

// websockets
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
	console.log("un nuevo socket conectado");
	socket.on('sendMessage', function (data) {
		var mensaje = data.message;
		io.sockets.emit('newMessage', mensaje);
	});
});