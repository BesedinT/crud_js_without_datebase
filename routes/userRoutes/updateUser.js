const data = require('../../data')

module.exports = (req, res) => {
  const id = parseInt(req.url.split('/')[2]);
  let body = '';
  req.on('data', chunk => {
    body += chunk;
  });
  req.on('end', () => {
    const updatedData = JSON.parse(body);
    const updatedUser = data.updateUser(id, updatedData);

    if (updatedUser) {
      res.writeHead(200);
      res.end(JSON.stringify(updatedUser));
    } else {
      res.writeHead(400);
      res.end(JSON.stringify({ message: 'User not found' }));
    }
  });
};   
    