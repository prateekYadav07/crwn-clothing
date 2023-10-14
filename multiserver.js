var http = require('http');
function handler(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
};
http.createServer(handler).listen(3000, '127.0.0.1');
http.createServer(handler).listen(3001, 'localhost');
http.createServer(handler).listen(3002, '192.168.0.112');
// http.createServer(handler).listen(3003, 'ho');
http.createServer(handler).listen(3004, 'Macbook-m1.local');