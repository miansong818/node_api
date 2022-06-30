/* eslint-disable require-jsdoc */
const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

const henry = new Person('Henry');
const cathy = new Person('Cathy');
// add listener for henry
henry.on('name', ()=>{
  console.log('my son is '+ henry._name);
});

// henry.emit('name');

cathy.on('name', ()=>{
  console.log('my daughter is '+ cathy._name);
});

// cathy.emit('name');

module.exports = {Person: henry.emit('name'), Person: cathy.emit('name')};
