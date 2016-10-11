var http = require('http');
	fs = require('fs'),
	base = '/home/examples/public_html';


http.createServer(function (request, response) {
	
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8080);

console.log('Server started');