const { MongoClient } = require('mongodb');
const config = require('../configs');
// const { UserSchema } = require('../data/user/user.model');


const connectDatabase = async () => {
  try {
    const client = new MongoClient(config.MONGO_URL);
    const connected = await client.connect();

    return connected.db(config.DB_NAME);
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = { connectDatabase };