/*
* http://rxmarbles.com/
* Concurrency: Events + Promises
* - managing flow control
* - responding to this in a proper order
*
*
* Promises work when there's a single request and a single response
* What happens when the information coming is a repeated stream of information
*
* Most async in programs are event oriented. Events coming from the user, server, coming from everywhere
*
* Problem is that promises can only be resolved once
*
* Promises are not going to go well in an event oriented world
*
* What is an Observable?
* - It's like a chain of calculated fields in a spreadsheet
* - You can have data in a field, but also data which is calculated in a field based on data in some other fields
* - The calculation chain is a flow of data. We're setting up a flow of data from an original source location to all different places where we are
*   doing something with that data. We're subscribing to and responding to that data
* - That's the genesis of the notion to reactive programming
* - It's a data flow mechanism
* - An observable, is an adaptor hooked up so an event source that produces a promise every time a new event comes through
* - But it does so in a separate way, where you can set up the event source. And in an entirely different part of your application
*   You can declaratively say what's my data flow
*
* REACTIVE PROGRAMMING
* - The source of my data is some event source. When i get that event it's going to go through a series of steps
* - Some of those steps are going to be direct/responsive and calculate, some might be async steps
*
* EVENT STREAMS
* - can be thought as a never ending array
* - It's possible to use list operations over an event stream the same way as using it on an array that's already complete
*
* */


import Rx from 'rxjs'

const obsv = Rx.Observable.fromEvent(btn, 'click')

obsv
  .map(function mapper(evt) {
    return evt.target.className
  })
  .filter(function filterer(className) {
    return /foobar/.test(className)
  })
  .distinctUntilChanged()
  .subscribe(function(data) {
    const className = data[1]
    console.log(className)
  })


/**
 * HOT VS COLD
 *
 * What is a Producer?
 * A producer is a source of values for your observable. It could bd a web socket, DOM events, iterator, or something looping over an array
 *
 *
 * COLD observables
 * An observable is cold if it's underlying producer is created and activated during subscription
 * This means that is an observable is a function, then the producer is created and activated by calling that function
 *
 */

// COLD example
const source = new Observable((observer) => {
  const socket = new WebSocket('ws://someurl');
  socket.addEventListener('message', (e) => observer.next(e));
  return () => socket.close();
});


