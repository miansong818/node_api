/* eslint-disable require-jsdoc */
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('sum', (num1, num2)=>{
  console.log(num1 + num2);
});
eventEmitter.emit('sum', 5, 5);

const sum = (num1, num2) => num1+num2;
const PI = 3.14;

class SomeMathObject {
  constructor() {
    console.log('object created');
  }
}


// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathObject = SomeMathObject;
// is same as below
module.exports = {sum: sum, PI: PI, SomeMathObject: SomeMathObject};
