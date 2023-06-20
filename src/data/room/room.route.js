const express = require('express');
const Router = express.Router();
const { connectDatabase } = require('../../database/connect-database');
const { baseCrud } = require('../base/base.controller');
const path = require('path');

Router.get('/get-all', async (req, res) => {
  const a = await connectDatabase();
  const Room = connectDatabase().collection('room');
  return baseCrud(Room).getAll();
});

Router.get('/test-chat', async (req, res) => {
  res.render('room');
});
Router.get('/test-html', async (req, res) => {
  const a = path.join(__dirname + "/../../views/test.html");
  res.sendFile(a);
});

module.exports = Router;


