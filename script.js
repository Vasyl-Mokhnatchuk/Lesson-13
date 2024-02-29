const http = require('http');
const host = '127.0.0.1';
const port = 8000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<html><body><h1>UKD</h1></body></html>');
});

server.listen(port, host, function() {
    console.log('Сервер працює');
});