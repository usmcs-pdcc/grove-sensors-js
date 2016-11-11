/* 03 - Simple HTML page 
 * Author: hadrihl // hadrihilmi@gmail.com */
var express = require('express');
var app = express();
var http = require('http').Server(app);

var m = require('mraa');
console.log("Libmraa version: " + m.getVersion());

http.listen(55555, function() {
	console.log("Server is listening at :55555");
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

/* Grove - PIR sensor */
var d7 = new m.Gpio(7);

setInterval(function() {
	console.log("val:" + d7.read());
}, 1000);
