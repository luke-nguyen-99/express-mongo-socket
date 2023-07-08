require('dotenv/config');

module.exports = {
  // database
  DB_NAME: process.env.DB_NAME || 'test',
  DB_USERNAME: process.env.DB_USERNAME || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_HOST: process.env.DB_HOST || '127.0.0.1',
  DB_PORT: parseInt(process.env.DB_PORT || '27017', 10),

  MONGO_URL:  process.env.MONGO_URL,

  // information jwt
  secret: "cbd3f46c2644ba8e4a7e12ec81c38e48fe6daa8f6ad2d7ffc3466e9b1282a8317649bcbed5e69951c3253998ba571959ab0de9e5dce8445c64859c1cd2e97531",
  algorithm: 'HS512',
  expiresIn: '20d', // 20 days

}