'import module http
var http = require('http');

'create onRequest function handler
function onRequest(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.js\n');
}

'create the http server and start listening
var server = http.createServer(onRequest);
server.listen(3000, '0.0.0.0');

'logging to console
console.log('Hello running at http://0.0.0.0:3000/');