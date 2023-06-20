const Room = require('./room.model');
const { baseCrud } = require('../base/base.route');

module.exports = baseCrud(Room);