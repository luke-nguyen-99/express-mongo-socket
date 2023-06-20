const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    author: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    role: String,
    title: String,
    body: String,
    date: Date
  },
  {
    collection: 'user'
  }
);

module.exports = mongoose.model('user', UserSchema);