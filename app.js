// /* eslint-disable require-jsdoc */
// // const EventEmitter = require('events');
// // const eventEmitter = new EventEmitter();

// // eventEmitter.on('sum', (num1, num2)=>{
// //   console.log(num1 + num2);
// // });
// // eventEmitter.emit('sum', 5, 5);
// const {format} = require('date-fns');
// const {v4: uuid} = require('uuid');

// // format date
// console.log(format(new Date(), 'yyyyyMMdd\tHH:mm:ss'));
// // uuid v4
// console.log('generate a uuid: '+uuid());
// // sum
// const sumObj = require('./sum');
// console.log(sumObj.sum(1, 2));
// console.log(sumObj.PI);
// console.log(new sumObj.SomeMathObject);

// // Person
// const personObj = require('./person');
// console.log(personObj);


// console.log(__dirname);
// console.log(__filename);

// console.log('nodemon will continue watch this');

require('./server');
