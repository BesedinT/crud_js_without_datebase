const data = require('../../data')

module.exports = (req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk;
  });
  req.on('end', () => {
    const parsedBody = JSON.parse(body);
    const name = parsedBody['name'];
    const age = parsedBody['age'];

    if (name && age) {
      const user ={ name, age: parseInt(age) };
      data.addUser(user);
      res.writeHead(201);
      res.end(JSON.stringify(user));
    } else {
      res.writeHead(400);
      res.end(JSON.stringify({ message: 'Name and age are required' }));
    }
  });
};
   
    