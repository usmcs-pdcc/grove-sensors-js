/* 04 - Add SocketIO to stream your sensor data HTML page 
 * Author: hadrihl // hadrihilmi@gmail.com */
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var m = require('mraa');
console.log("Libmraa version: " + m.getVersion());

http.listen(55555, function() {
	console.log("Server is listening at :55555");
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

/* Grove - moisture sensor*/
var pin = new m.Aio(0);

io.on('connection', function(socket) {
	console.log("user connected!");

	var intervalID = setInterval(function() {
		var data = pin.read();
		socket.emit('stream', data);
		console.log("data:" + data);
	}, 1000);

	socket.on('disconnect', function() {
		console.log("user disconnected...");
		clearInterval(intervalID);
	});
});
