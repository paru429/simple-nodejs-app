const http = require('http');
const routes = require('./routes');

// createServer takes func as parameter which will be executed for every request known as request listener
const server = http.createServer(routes);

server.listen(3040);