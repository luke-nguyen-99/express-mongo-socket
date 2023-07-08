const jwt = require('jsonwebtoken');

module.exports.authentication = async (req, res, next) => {
  const token = req.cookies;

  if (!!token['x-access-token']) {
    return next();
  }
  
  console.log('x-access-token: ' + token['x-access-token']);
  return res.redirect('/login');
}