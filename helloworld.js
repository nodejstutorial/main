var http = require('http');
function onRequest(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.js\n');
}
var server = http.createServer(onRequest);
server.listen(3000, '0.0.0.0');
console.log('Hello running at http://0.0.0.0:3000/');