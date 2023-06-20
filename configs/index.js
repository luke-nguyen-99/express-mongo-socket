require('dotenv/config');

module.exports = {
  // database
  DB_NAME: process.env.DB_NAME || 'test',
  DB_USERNAME: process.env.DB_USERNAME || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_HOST: process.env.DB_HOST || '127.0.0.1',
  DB_PORT: parseInt(process.env.DB_PORT || '27017', 10),



}