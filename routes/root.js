/* eslint-disable new-cap */
/* eslint-disable max-len */
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/index(.html)?', (req, res)=>{
  // either way to send file to view
  //   res.sendFile('./views/index.html', {root: __dirname});
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/home(.html)?', (req, res)=>{
  // either way to send file to view
  //   res.sendFile('./views/index.html', {root: __dirname});
  res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
});

router.get('/home(.html)?', (req, res)=>{
  // either way to send file to view
  //   res.sendFile('./views/index.html', {root: __dirname});
  res.redirect(301, '/home.html');
});

module.exports = router;
