/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
const {format} = require('date-fns');
const {v4: uuid} = require('uuid');
const fs = require('fs');
const path = require('path');
// const EventEmitter = require('events');

// const dataTime = `${format(new Date(), 'yyyyyMMdd\tHH:mm:ss')}`;
// console.log(dataTime);
// const logItem = `${dataTime}\t${uuid()}\t${'message'}`;
// console.log(logItem);

const logger = async (message)=>{
  console.log('1');
  const dataTime = `${format(new Date(), 'yyyyyMMdd\tHH:mm:ss')}`;
  console.log('2');
  const logItem = `${dataTime}\t${uuid()}\t${message}`;
  console.log(logItem);
  try {
    await fs.promises.appendFile(path.join(__dirname, 'logger', 'log.txt', logItem));
  } catch (e) {
    console.log(e);
  }
};


// class MyEmmiter extends EventEmitter {};
// console.log('0');
// const myEmmiter=new MyEmmiter();
// myEmmiter.on('this is log 1', (msg)=>logEvents(msg));

// setTimeout(()=>{
//   // emit event
//   console.log('3');
//   await myEmmiter.emit('log', 'Log event emitted!');
// }, 2000);
