const User = require('./user.model');
const { baseCrud } = require('../base/base.route');

module.exports = baseCrud(User);
