const express = require('express');
const framework = require('./boot/framework');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

framework.run({app, name: 'express'});

const server = app.listen(process.env.PORT, function () {
  console.log('runing ...');
});
