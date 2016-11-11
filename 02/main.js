/* 02 - Write NodeJS HTTP 
 * Author: hadrihl // hadrihilmi@gmail.com */
var m = require('mraa');
console.log("Libmraa version: " + m.getVersion());

var http = require('http');
var server = http.createServer(function (req, res) {
	res.end("hello, http!");
});

server.listen(55555, function() {
	console.log("Server is listening at *:55555");
});

var d7 = new m.Gpio(7);

setInterval(function() {
	console.log("val:" + d7.read());
}, 1000);
