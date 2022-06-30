/* eslint-disable require-jsdoc */
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('sum', (num1, num2)=>{
  console.log(num1 + num2);
});

eventEmitter.emit('sum', 5, 5);

const sumObj = require('./sum');
console.log(sumObj.sum(1, 2));
console.log(sumObj.PI);
console.log(new sumObj.SomeMathObject);


const personObj = require('./person');
console.log(personObj);
