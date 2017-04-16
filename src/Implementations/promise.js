var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;

function Promise2(fn) {
  if (typeof this !== 'object')
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function')
    throw new TypeError('fn must be a function');

  // store state which can be PENDING, FULFILLED or REJECTED
  var state = PENDING;

  // store value once FULFILLED or REJECTED
  var value = null;

  // store sucess & failure handlers
  var handlers = [];

  function resolve(result) {
    try {
      var then = getThen(result);
      if (then) {
        doResolve(then.bind(result), resolve, reject)
        return
      }
      state = FULFILLED;
      value = result;
      handlers.forEach(handle);
      handlers = null;
    } catch (e) {
      reject(e);
    }
  }

  function reject(error) {
    state = REJECTED;
    value = error;
    handlers.forEach(handle);
    handlers = null;
  }

  function handle(handler) {
    if (state === PENDING) {
      handlers.push(handler);
    } else {
      if (state === FULFILLED && typeof handler.onFulfilled === 'function') {
        handler.onFulfilled(value);
      }
      if (state === REJECTED && typeof handler.onRejected === 'function') {
        handler.onRejected(value);
      }
    }
  }
  this.done = function (onFulfilled, onRejected) {
    setTimeout(function () { // ensure we are always asynchronous
      handle({
        onFulfilled: onFulfilled,
        onRejected: onRejected
      });
    }, 0);
  }

  this.then = function (onFulfilled, onRejected) {
    var self = this;
    return new Promise2(function (resolve, reject) {
      return self.done(function (result) {
        if (typeof onFulfilled === 'function') {
          try {
            return resolve(onFulfilled(result));
          } catch (ex) {
            return reject(ex);
          }
        } else {
          return resolve(result);
        }
      }, function (error) {
        if (typeof onRejected === 'function') {
          try {
            return resolve(onRejected(error));
          } catch (ex) {
            return reject(ex);
          }
        } else {
          return reject(error);
        }
      });
    });
  }

  doResolve(fn, resolve, reject);
}

function doResolve(fn, onFulfilled, onRejected) {
  var done = false;
  try {
    fn(function (value) {
      if (done) return
      done = true
      onFulfilled(value)
    }, function (reason) {
      if (done) return
      done = true
      onRejected(reason)
    })
  } catch (ex) {
    if (done) return
    done = true
    onRejected(ex)
  }
}

// a function that returns `then` if `value` is a promise, otherwise `null`
function getThen(value) {
  let t = typeof value
  if (value && (t === 'object' || t === 'function')) {
    let then = value.then
    if (typeof then === 'function') {
      return then
    }
  }
  return null
}

function fakeApi(data) {
  return new Promise2((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

fakeApi('yo').then((x) => console.log(x), (e) => {console.log('error', e)})




