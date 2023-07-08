const { connectDatabase } = require('../database/connect-database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../configs');

module.exports.login = async (req, res, next) => {
  try {
    const db = await connectDatabase();
    const User = db.collection('user');
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.render('auth/login-fail');
    }
    
    const checked = await bcrypt.compare(password, user.password);

    if (!checked) {
      return res.render('auth/login-fail');
    }

    const token = jwt.sign(
      { 
        id: user._id,
        remember: req.body.remember
      },
      config.secret,
      {
        algorithm: config.algorithm,
        expiresIn: config.expiresIn,
      }
    );
    res.cookie('x-access-token', token, { maxAge: 900000, httpOnly: true });

    return res.redirect('/room/test-chat');
    
  } catch (e) {
    return next(e);
  }
}

module.exports.logout = async (req, res, next) => {
  try {
    res.clearCookie('x-access-token');
    return res.redirect('/login');
  } catch (e) {
    return next(e);
  }
}