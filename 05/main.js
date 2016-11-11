/* 05 - Simple SocketIO to HTML page 
 * Author: hadrihl // hadrihilmi@gmail.com */
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

http.listen(44444, function() {
	console.log("listening at *:44444");
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	console.log("user connected!");

	var intervalID = setInterval(function() {
		socket.emit('stream', "hello");
	}, 1000);

	socket.on('disconnect', function() {
		console.log("user disconnected...");
		clearInterval(intervalID);
	});
});
