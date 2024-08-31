const http = require('node:http');

http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type" : "text/html; charset=UTF-8"})
    response.write('<h1>hello mạnh</h1>')
    response.end();
  // magic happens here!
}).listen(8080);
