/* 01 - Write NodeJS code to retrieve data from Grove sensor using Libmraa
 * Author: hadrihl // hadrihilmi@gmail.com */
var m = require('mraa');
console.log("Libmraa version: " + m.getVersion());

var A0 = new m.Aio(0);

setInterval(function() {
	console.log("val:" + A0.read());
}, 1000);
