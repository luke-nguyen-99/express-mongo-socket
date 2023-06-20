const { MongoClient } = require('mongodb');
const config = require('../configs');
// const { UserSchema } = require('../data/user/user.model');


const connectDatabase = async () => {
  const url = 'mongodb://' +
    (!!config.DB_USERNAME ?  config.DB_USERNAME + ':' : '' ) + 
    (!!config.DB_PASSWORD ?  config.DB_PASSWORD + '@' : '' ) + 
    config.DB_HOST + ':' +
    config.DB_PORT +
    '/?authMechanism=DEFAULT';
  const client = new MongoClient(url);

  client.connect().then(result => {
    console.log('Connected successfully');
    return result.db(config.DB_NAME);
  });
}

module.exports = { connectDatabase };