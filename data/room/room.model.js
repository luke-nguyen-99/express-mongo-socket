const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RoomSchema = new Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    code: String,
    name: String,
    max: String,
  },
  {
    collection: 'room'
  }
);

module.exports = mongoose.model('room', RoomSchema);