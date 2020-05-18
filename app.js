const http = require('http');
const colors = require('colors');
const routes = require('./routes');

// createServer takes func as parameter which will be executed for every request known as request listener
const server = http.createServer(routes);

server.listen(3040);

const shutdown = function() {
  console.log(colors.yellow('WARN::************shutting down server**************'));
  server.close();
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);