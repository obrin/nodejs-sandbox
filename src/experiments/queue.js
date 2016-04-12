
var Queue = require('promise-queue');

var maxConcurrent = 2;
var maxQueue = Infinity;
var queue = new Queue(maxConcurrent, maxQueue);

//Queue.configure(require('vow').Promise);


async function asyncFunc() {

  return await api();
}

queue.add(asyncFunc)
  .then(res => console.log(res))
  .catch(err => console.log(err));
queue.add(asyncFunc)
  .then(res => console.log(res))
  .catch(err => console.log(err));
queue.add(api)
  .then(res => console.log(res))
  .catch(err => console.log(err));
queue.add(api)
  .then(res => console.log(res))
  .catch(err => console.log(err));
queue.add(api)
  .then(res => console.log(res))
  .catch(err => console.log(err));

queue.add(api2)
  .then(res => console.log(res))
  .catch(err => console.log(err));
queue.add(api2)
  .then(res => console.log(res))
  .catch(err => console.log(err));
queue.add(api2)
  .then(res => console.log(res))
  .catch(err => console.log(err));
queue.add(api2)
  .then(res => console.log(res))
  .catch(err => console.log(err));


//asyncFunc();
//asyncFunc();
//asyncFunc();
//asyncFunc();

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promised');
    }, 1000)

  })
}

function api2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promised2');
    }, 1000)

  })
}