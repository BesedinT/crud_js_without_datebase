const data = require('../../data')

module.exports = (req, res) => {
  res.writeHead(200);
  res.end(JSON.stringify(data.getUsers()));
};
