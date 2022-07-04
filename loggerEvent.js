/* eslint-disable require-jsdoc */
const logger= require('./logger');

const EventEmitter = require('events');

class MyEmmiter extends EventEmitter {};

console.log('0');
const myEmmiter=new MyEmmiter();
myEmmiter.on('this is log 1', (msg)=>logger(msg));

setTimeout(()=>{
  // emit event
  console.log('3');
  myEmmiter.emit('log', 'Log event emitted!');
}, 2000);
