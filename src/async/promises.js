/**
 * We wrap the continuation of our program in a callback function
 * and cross our fingers that it will do the right thing with invocation of the callback.
 * We do that because want to say `here's what happens later, after the current steps finishes`
 *
 * But what if we could uninvert the inversion control
 * Instead of handing the continuation of our program to another party,
 * we could expect it to return us a capability to know when its task finishes
 * and then our code could decide what to do next?
 *
 * Most new async APIs being added to JS/DOM platform are being built on promises
 */

/**
 * Promises are one of those tools where it can be painfully obvious from how someone uses it
 * whether they understand what it's for and about versus just learning and using the API
 */

/**
 * FUTURE VALUE metaphor
 *
 * Ordering a cheeseburger
 */

/**
 * Because promises encapsulates the time dependent state -- waiting for fulfillment or rejection of the underlying value --
 * from the outside the Promise itself it time independent
 * Thus promises can be combined in predictable ways regardless of the timing or outcome underneath
 *
 * Once a Promise is resolved, it stays that way forever -- it becomes an immutable value at that point
 * and can be observed as many times as necessary
 *
 * Because promise is extremely immutable once resolved, it's now safe to pass that value around to any
 * third party and know that it cannot be modified accidentally or maliciously
 *
 * Immutability is one of the most fundamental and important aspects of Promise design
 *
 * With fair amount of work, you could create the same effects with nothing but callbacks, but requires a fair amount of work
 */

/**
 - Promises retains control and solves trust issues with callbacks
 - Inversion control
 - Pattern for managing callbacks in a trustable fashion

 Promise Trust
 1. only resolved once
 2. either success OR error
 3. messages passed/kept
 4. exceptions become errors
 5. Immutable once resolved
 */

function promiseApi(arg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arg)
    }, 1000)
  })
}

// Timeout if it takes too long and promise is never resolved
Promise.race([
  promiseApi(),
  new Promise((_, reject) => {
    setTimeout(() => {
      reject('TIMEOUT!')
    }, 3000)
  })
])


/**
 * COMPLETION EVENT
 *
 * With callbacks, the notification would be our callback invoked by the task.
 * But with promises, we turn the relationship around, and expect that we ca listen for an event,
 * and when notified, proceed accordingly
 */

/**
 * Promise Trust
 *
 * Callback trust issues
 * 1) Call the callback too early
 * 2) Call the callback too late (or never)
 * 3) Call the callback too few or too many times
 * 4) Fail to pass along any necessary environment/parameters
 * 5) Swallow any errors/exceptions that may happen
 *
 * Promises
 * 1) When you call then on a Promise, even if that promise was already resolved,
 * the callback you provide to then will always be called asynchronously.
 * No more need to insert your own setTimeout(..., 0) hacks
 * 2) A Promise's `then` registered observation callbacks are automatically scheduled
 * When either `resolve`, or `reject` are called by the Promise
 * Those scheduled callbacks will predictably be fired at the next asynchronous moment
 * It is not possible for synchronous observation
 * 2B) Resolve using race
 * 3) Promises are defined so that they can only be resolved or rejected once.
 * If resolve, or reject is called multiple times, only the first resolution will be attempted
 * 4) If you don't explicitly resolve with a value either way, the value is undefined, as is typical in JS
 * 5) Exception errors will be caught, and it will force the Promise in question to become rejected.
 */

// 2B) Never calling the callback
// a utility for timing out a Promise
function timeoutPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('TIEMOUT!')
    }, delay)
  })
}

Promise.race([
  promiseApi('hello'), // attempt async call
  timeoutPromise(5000) // give it 5 seconds
]).then()

/**
 * TRUSTABLE PROMISE
 *
 * Promises don't get rid of callbacks at all
 * They just change where the callback is passed to.
 * Instead of passing a callback to `foo(...)`, er get something back
 * from `foo(...)` and we pass that callback to that something instead
 *
 * Promise.resolve(...) will give us a trustable promise wrapper to chain off of
 *
 * Promises are a pattern that augments callbacks with trustable semantics
 * So that the behaviour is more reason-able and reliable.
 * By uninverting the inversion of control of callbacks, we place the control with a trustable system (Promises)
 * that was designed specifically to bring sanity to our async
 */



/**
 The point of promises is to give us back functional composition and error bubbling in the async world.
 They do this by saying that your functions should return a promise, which can do one of two things:

 Become fulfilled by a value
 Become rejected with an exception
 */

/**
 * PROMISE UNCANCELABLE
 * Once you create a promise and register a fulfillment/rejection handler for it,
 * there's nothing external you can do to stop that progression
 *
 * Libraries that provide facilities to cancel Promise is a terrible idea
 * It allows consumer/observer of a Promise affect some other consumers ability to observe that same promise
 * This violates the future-value trustability
 * Regardless of how useful it seems, it will actually lead you straight back into the same nightmare as callbacks
 */

var p = foo( 42 );

Promise.race( [
  p,
  timeoutPromise( 3000 )
] )
  .then(
    doSomething,
    handleError
  );

p.then( function(){
  // still happens even in the timeout case :(
} );

// The "timeout" was external to the promise p, so p itself keeps going, which we probably don't want.


var OK = true;

var p = foo( 42 );

Promise.race( [
  p,
  timeoutPromise( 3000 )
    .catch( function(err){
      OK = false;
      throw err;
    } )
] )
  .then(
    doSomething,
    handleError
  );

p.then( function(){
  if (OK) {
    // only happens if no timeout! :)
  }
} );

