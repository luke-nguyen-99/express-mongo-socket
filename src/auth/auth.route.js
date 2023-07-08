const router = require('express').Router();
const controller = require('./auth.controller');

router.get('/login', (req, res) => {
  res.render('auth/login');
})
router.post('/login', controller.login);
router.get('/logout', controller.logout);

module.exports = router;