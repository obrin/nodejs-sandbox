/**
 - Thunk is a function that already has everything it needs to do to give you back a value — no arguments needed
 - Keeps a closure state - uses closure to maintain state
 - A container
 - Usage of a callback pattern
 - Eliminates time a a conflicting factor of state
 - Allows us to compose thunks together and not worry about the ordering as time is a non issue
 */

/******* Synchronous Thunk ***************************************************/
function add(x, y) {
  return x + y
}

var thunk = function() {
  return add(10, 15)
}

thunk()

/******* Asynchronous Thunk ***************************************************/
/**
 - Async Thunk is a function that doesn't need any argument passed to it except a callback to get the value out
 - From the outside world, we do not know, or need to care whether the value is available immediately or would take awhile to get the value
 - We produce a wrapper around the value that has become time independent -- Time independent wrapper
 - Time is the most complex state in a program
 */

function addAsync(x, y, cb) {
  setTimeout(() => {
    cb(x + y)
  }, 1000)
}

var asyncThunk = function(cb) {
  return addAsync(10, 15, cb)
}

asyncThunk(sum => sum) // 25


/******* Thunk Constructor ***************************************************/
/**
 - Similar to promise constructor
 */

function thunkConstructor() {
  function makeThunk (fn, ...args) {
    return function(cb) {
      return fn(args, cb)
    }
  }

  var asyncThunk = makeThunk(addAsync, 10, 15)
  asyncThunk(sum => sum) // 25
}


/******* Active Thunks ***************************************************/
function activeThunks() {
  function fakeAjax(url, cb) {
    var fake_responses = {
      "file1": "The first text",
      "file2": "The middle text",
      "file3": "The last text"
    };

    var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

    setTimeout(function(){
      cb(fake_responses[url]);
    },randomDelay);
  }

  function getFile(file) {
    var text
    var fn

    fakeAjax(file, response => {
      // if thunk callback is executed first
      if (fn) fn(response)
      // else hoist the response for later use
      else text = response
    })

    return function(cb) {
      // if response was completed first
      if (text) cb(text)
      else fn = cb
    }
  }
}
