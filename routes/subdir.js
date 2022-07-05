/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const path = require('path');


router.get('^/$|/index(.html)?', (req, res)=>{
  res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'index.html'));
});
// 3:10:50
router.get('^/$|/test(.html)?', (req, res)=>{
  res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'test.html'));
});

module.exports = router;
