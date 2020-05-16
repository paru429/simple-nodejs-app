const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if(url === '/') {
    res.setHeader('content-type', 'text/html');
    res.write('<html><head><title>User</title></head><body>Welcome folks!<br/><a href="/form">Add User<br/></a><a href="/users">List users</a></body></html>');
    return res.end();
  }

  if(url === '/form') {
    res.setHeader('content-type', 'text/html');
    res.write('<html><head><title>User</title></head><body><form action="/create-user" method="POST"><input type="text" name="userName"/><br/><button type="submit">Submit</button></form></body></html>');
    return res.end();
  }

  if(url === '/users') {
    res.setHeader('content-type', 'text/html');
    res.write('<html><head><title>User</title></head><body><ul><li>Paru</li><li>Cherma</li><li>Meena</li></ul><br/><a href="/">Go Home</a></body></html>');
    return res.end();
  }

  if(url === '/create-user' && method === 'POST') {
    const data = [];

    req.on('data', (chunk) => {
      data.push(chunk);
    });

    req.on('end', () => {
      const parsedData = Buffer.concat(data).toString();
      const endData = parsedData.split('=')[1];
      console.log('Username: ', endData);
      fs.writeFile('username.txt', endData, err => {
        if(err) {
          res.statusCode = 302;
          res.setHeader('Location', '/');
          return res.end();
        }
      });
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
};

module.exports = requestHandler;

//Different way of exporting in node
// module.exports.handler = requestHandler;
// module.exports.someText = 'some random text';

// module.exports = {
//   handler: requestHandler,
//   someText: 'some random text'
// };

// exports.handler = requestHandler;
// exports.someText = 'some random text';