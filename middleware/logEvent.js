/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
// const logger= require('../logger');
const {format} = require('date-fns');
const {v4: uuid} = require('uuid');
const fs = require('fs');
// const EventEmitter = require('events');
// class MyEmmiter extends EventEmitter {};
const path = require('path');

// const myEmmiter=new MyEmmiter();
// myEmmiter.on('this is log 1', (msg)=>logger(msg));

// setTimeout(()=>{
//   // emit event
//   console.log('3');
//   myEmmiter.emit('log', 'Log event emitted!');
// }, 2000);


const logEvents = async (message, logName)=>{
  const dateTime = `${format(new Date(), 'yyyyyMMdd\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}`;
  try {
    if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
      await fs.promises.mkdir(path.join(__dirname, '..', 'logs'));
    }
    await fs.promises.appendFile(path.join(__dirname, '..', 'logs', logName), logItem);
  } catch (e) {
    console.log(e);
  }
};
const logger = (req, res, next)=>{
  logEvents(`${req.method}${req.headers.origin}${req.url}`, 'reqLog.txt');
  console.log(`logger: ${req.headers.origin}`);
  next();
};

module.exports = {logger, logEvents};
