import Rx from 'rxjs'

export function timeout(time) {
  return {
    forEach: function(observer) {
      var handle =
        setTimeout(() => {
          observer.onNext(undefined);
          observer.onCompleted();
        }, time);

      return {
        dispose: function() {
          clearTimeout(handle)
        }
      }
    }
  }
}

export function fromEvent(dom, eventName) {
  return {
    forEach: function(observer) {
      handler = (e) => {
        observer.onNext(e);
        observer.onCompleted();
      };
      dom.addEventListener(eventName, handler);

      return {
        dispose: function() {
          dom.removeEventListener(eventName, handler)
        }
      }
    }
  }
}


/**
 * Observable is just a function that takes an observer and returns a function
 * --------
 * Shape:
 * - A function
 * - Accepts an observer: An object with `next`, `error` and `complete` methods on it
 * - Returns a cancelation function
 *
 * Purpose:
 * - To connect the observer to something that produces values (a producer)
 * - And return a means to tear down that connection to the producer
 * - The observer is really a registry handlers that can be pushed values over time
 */

// BASIC IMPLEMENTATION
class DataSource {
  constructor() {
    let i = 0
    this.id = setInterval(() => this.emit(i++), 500)
  }

  emit(n) {
    const limit = 10
    if (this.onNext) {
      this.onNext(n)
    }

    if(n === limit) {
      if (this.onComplete) {
        this.onComplete()
      }
      this.destroy()
    }
  }

  destroy() {
    clearInterval(this.id)
  }
}

// function data() {
//   let i = 0
//   let id = setInterval(() => emit(i++), 500)
//
//   function emit(n) {
//     const limit = 10
//   }
//
//   return {
//     onNext(n) {
//
//     }
//   }
// }

function myObservable(observer) {
  const dataSource = new DataSource()

  dataSource.onNext = (e) => observer.onNext(e)

  dataSource.onError = (err) => observer.onError(err)

  dataSource.onComplete = () => observer.onComplete()

  return () => { dataSource.destroy() }
}

myObservable({
  onNext: (data) => console.log('DATA:', data),
  onComplete: () => console.log('completed')
})


/**
 * Observables are functions that take an observer and return a function
 *
 * Observers are the workhorse of reactive programming
 *
 * Observables are inert. They are just functions.
 * They sit there until you subscribe to them. They set up your observer, and they're done, back to old functions waiting to be called
 *
 * Observers stay active and listen for events from your producers
 */

/**
 * Observer Guarantees
 *
 * 1. If you pass an observer doesn't have all of the methods implemented, that's okay
 * 2. You don't want to call `next` after a `complete` or an `error`
 * 3. You don't want anything called if you've unsubscribed
 * 4. Calls to `complete` and `error` need to call unsubscription logic
 * 5. If your `next`, `complete` or `error` handle throws an exception,
 * you want to call your unsubscription logic so you don't leak resources
 * 6. `next`, `error` and `complete` are all actually optional. You don't have to handle
 * every value, errors, or completions
 */

class SafeObserver{
  constructor(destination) {
    this.destination = destination
  }
  next(value) {
    // only try to next if you're subscribed have a handler
    if (!this.isUnsubscribed && this.destination.next) {
      try {
        this.destination.next(value)
      } catch (err) {
        // if the provided handler errors, teardown resources, then throw
        this.unsubscribe()
        throw err
      }
    }
  }
  error(err) {
    // only try to emit error if you're subscribed and have a handler
    if (!this.isUnsubscribed && this.destination.error) {
      try {
        this.destination.error(err)
      } catch(err) {
        // if the provided handler errors, teardown resources, then throw
        this.unsubscribe()
        throw err
      }
      this.unsubscribe()
    }
  }
  complete() {
    // only try to emit completion if you're subscribed and have a handler
    if (!this.isUnsubscribed && this.destination.complete) {
      try {
        this.destination.complete()
      } catch (err) {
        this.unsubscribe()
        throw err
      }
      this.unsubscribe()
    }
  }
  unsubscribe() {
    this.isUnsibscribed = true
    if (this.unsub) {
      this.unsub()
    }
  }
}

class Observable {
  constructor(_subscribe) {
    this._subscribe = _subscribe
  }
  subscribe(observer) {
    const safeObserver = new SafeObserver(observer)
    safeObserver.unsub = this._subscribe(safeObserver)
    return safeObserver.unsubscribe.bind(safeObserver)
  }
}

Observable.prototype.map = function(project) {
  return new Observable((observer) => {
    const mapObserver = {
      next: (x) => observer.next(project(x)),
      error: (err) => observer.error(err),
      complete: () => observer.complete()
    }
    return this.subscribe(mapObserver)
  })
}

/**
 * our observable
 */
const myObservable2 = new Observable((observer) => {
  const datasource = new DataSource();
  datasource.ondata = (e) => observer.next(e);
  datasource.onerror = (err) => observer.error(err);
  datasource.oncomplete = () => observer.complete();

  return () => datasource.destroy();
});

/**
 * now let's use it
 */
const unsub = myObservable2.map(x => x + x).map(x => x + '!').subscribe({
  next(x) { console.log(x); },
  error(err) { console.error(err); },
  complete() { console.log('done')}
});



/**
 * OPERATORS
 *
 * A function that takes a source observable and returns a new observable
 * that will subscribe to that source observable when you subscribe to it.
 * Creating a chain
 *
 */


/**
 * Events, async request and animations can all be modeled as async collections
 * Once we can model all these things as collections, we can use all the array methods to combine together
 * these async data sources and build complex async programs easily
 *
 * How do we model async operations as an array? We can't
 * But we can model async operations as a collection that arrives over time with observables types
 *
 * An Observable is just like an array with the difference being, arrays stores all data in memory; observables has no data stored in memory
 * The item arrives overtime asynchronously
 *
 * Observable - DOM event
 */




/**
 * Ways of thinking of events
 *
 * Interacting with events through apis that hang of an object
 *
 * Observables give us an object by which to represent that event stream
 * Using that object we can call array methods
 * All we have to do is convert the event into an observable collection
 *
 *
 * If we think of events as first class collections, we can use all the methods that we already know, forEach, map, concatAll, etc
 */

// FIST CLASS: JavaScript functions are first-class functions meaning functions and objects are treated as the same thing
// Functions in javascript are first class objects. This means that javascript functions are just a special type of object that can do all the things that regular objects can do.


// Similar to consuming the items in an array and doing something with it
const source1 = [1, 2, 3, 4, 5, 6]

source1
  .map(x => x + '!')
  .forEach(x => console.log(x))

// have your datasource accept an observable and now all of a sudden you functions can
// handle data source asynchronously
const source2 = Rx.Observable.interval(500).take(6)

source2
  .map(x => x + '!')
  .forEach(x => console.log(x))

// Difference is one is sync and the other is async because for sync, all the data is already there


/**
 * How do we do something when a) the collection has been completely exhausted b) an error is detected
 * A: the forEach accepts 3 callbacks, onNext, onError, onComplete
 */


// Same affect as these callbacks are executed async
// No matter how complete your expression - how many maps, concatAll and etc you use, Observables will pipe any errors to the error callback
// There's no need to worry about forwarding errors - similar to how try catch works
const clicks = Rx.Observable
    .fromEvent(btn, 'clicked!')
    .map(e => 'clicked!')

const subscription = clicks.forEach(
  function onNext(msg) {
    alert(msg) // clicked!
    throw 'error'
  },
  function onError() {
    console.log('ERROR')
  },
  function onComplete() {
    console.log('DONE!')
  })

// subscription.unsubscribe()


// There's no concept of unsubscribe in an array because for each completes synchronously

try {
  [1, 2, 3, 4].forEach((i) => console.log(i))

  console.log('DONE!')
}
catch(e) {
  console.log('ERROR!')
}


/**
 * HOT VS COLD
 */

/**
 * COLD is when your observable creates the producer
 * An observable is cold if its underlying producer is created and activated during subscription
 * If observables are functions, then the producer is created and activated by calling that function
 *
 */
const cold = new Observable((observer) => {
  const producer = new Producer();
  // have observer listen to producer here
})

const producer = new Producer();
const hot = new Observable((observer) => {
  // have observer listen to the producer here
})


/**
 * COLD (Unicast)
 * The example is cold because it creates and listens to the WebSocker inside of the subcriber function
 * that is called when you subscribe to the Observable
 *
 * So anything that subscribes to `source` will get its own WebSocket instance
 * and when it unsubscribes, it will `close()` that socket
 *
 * This means that our source is really only ever unicast, because the producer
 * can only send to one observer
 */
const coldSource = new Observable(observer => {
  const socket = new WebSocket('ws://someurl')
  socket.addEventListener('message', (e) => observer.next(e))
  return () => socker.close()
})

/**
 * Observables are functions that tie an observer to a producer
 *
 * A Producer is the source of values for your observable
 */


/**
 * HOT (Multicast - usually)
 * An observable is hot if its underlying producer is either created or activated outside of subscription
 *
 * Below, anything that subscribes to the source will share the same WebSocket instance (Multicast)
 *
 * PROBLEM:
 * No longer carrying the logic to teardown the socket with our observable
 * Things like errors and completions, as well as unsubscribe, will no longer close the socket for us
 */

const socket = new WebSocket('ws//someurl')
const hotSource = new Observable((observer) => {
  socket.addEventListener('message', (e) => observer.next(e))
})

/**
 * Why make a "HOT" Observable?
 *
 * If you're subscribing to an observable more than once that is creating some scarce resource
 * like web socket connection, you don't want to create that web socket connection over and over
 */

// creates a subject that is shared by the resulting observable
function makeHot(cold) {
  const subject = new Subject()
  cold.subscribe(subject)
  return new Observable(observer => subject.subscribe(observer))
}

/**
 * track subscription to source - so we can tear it down when we want to
 * So when an observable is hot and all subscriptions to it are ended,
 * the `refs` used for referencing counting will hit zero, and we'll unsubscribe from the cold observable
 */
function makeHotRefCounted(cold) {
  const subject = new Subject()
  const mainSub = cold.subscribe(subject)
  let refs = 0
    return new Observable((observer) => {
    refs++
    let sub = subject.subscribe(observer)
    return () => {
      refs--
      if (refs === 0) mainSub.unsubscribe()
      sub.unsubscribe()
    }
  })
}

/**
 * Promises vs Observables
 *
 * Observables are lazy and embodies setup and teardown of data sources
 * - Unlike promises, observables can be canceled, because the embody everything necessary to tear themselves down
 * - Because Observables embody everything to set themselves up, they can be called again as long as you have access to them
 * - Therefore if there's an observable there errored, you can subscribe to it again to retry
 * - Promises has read only view to the future and cannot be repeated or retried
 */

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('promise timeout hit')
    resolve(42)
  }, 1000)
  console.log('promises started')
})

promise.then(x => console.log(x))

const source = new Observable((observer) => {
  const id = setInterval(() => {
    console.log('observable timeout hit')
    observer.onNext(42)
  }, 1000)
  console.log('observable started')

  return () => {
    console.log('dispose called')
    clearInterval(id)
  }
})

const disposable = source.subscribe({
  next: (e) => console.log(e)
})

setTimeout(() => {
  disposable()
}, 2000)
