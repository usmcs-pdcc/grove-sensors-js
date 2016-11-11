/* 06 - Template by Retrospect https://templated.co/retrospect 
 * Author: hadrihl // hadrihilmi@gmail.com */
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var m = require('mraa');

/* Grove - moisture sensor */
var pin = new m.Aio(0);

http.listen(44444, function() {
	console.log("listening at *:44444");
});

app.use(express.static(__dirname));


io.on('connection', function(socket) {
	console.log("user connected!");

	var intervalID = setInterval(function() {
		socket.emit('stream', pin.read());
	}, 1000);

	socket.on('disconnect', function() {
		console.log("user disconnected...");
		clearInterval(intervalID);
	});
});
