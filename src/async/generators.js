/**
 * At first it might seem like it has nothing to do at all with async programming
 * It's going to seem strange and out of place
 * But it's a fundamental part of the whole picture
 *
 * If promises were about solving the inversion of control issue in callback hell
 * Generators are about solving the non local, non sequential reasonability problem
 *
 * All functions have a run to completion characteristic
 * When a function starts running, it will always run to the end of that function and finish
 * before any other function has the opportunity to come and start running
 *
 * No function can come in and interupt the process and run something else
 *
 * It is the most important characteristics of javascript
 * It's what allows us to reason about things in a single threaded fashion
 * Never having to worry about two functions, one interupting the other one and corrupting our shared memory
 *
 * Generators do not have a run to completion semantic
 * They are a different kind of function
 * But it's not designed to introduce chaos into your program
 * It's designed to introduce a behaviour that we previously had to go through a lot of work to simulate
 *
 * The Javascript generator is a synthetic form of declaring a state machine
 * State machines are a way of having a pattern series of flow from one state to another state to another state
 * And declaratively listing all of those states in the transition
 *
 * Generators(yield)
 * the yield keyword is kind of like a pause button
 * - A generator is like a pausable function
 * - When it comes across a yield keyword everything just freezes
 * - Generator will be in that paused state indefinitely until some other actor comes along and says it's time to resume
 * - During a pause, everything inside the generator paused, it doesn't block the program, only a localized block
 */


function* gen() {
  console.log('Hello')
  yield
  console.log('World')
}

// executing a generator does not run any of its code
// instead it produces an iterator
// the purpose of the iterator is to step through the control of our generator from the outside
const it = gen()
// there could be a gap in time between the next two iterators, and in that time, the overall program continues to run
it.next() // Hello
it.next() // World


/**
 * The generator gets to decide when it wants to pause. nobody from the outside gets to tell the generator when to pause
 * It cannot be preemptively interupted i.e., cooperative concurrency rather than preemptive concurency
 *
 * Preemptive: someone from the outside can come in and interrupt you at any given moment - That's what causes chaos in threaded languages
 *
 */

/**
 * Generators are also message passing
 */

function *main() {
  yield 1
  yield 2
  yield 3
}

const it2 = main()
it.next() // { value: 1, done: false }
it.next() // { value: 2, done: false }
it.next() // { value: 3, done: false }

it.next() // { value: undefined, done: true }

/**
 * The yield and the next pair together to create a two way message passing system
 * Not only can we yield messages out. But when we call the next method, we can pass the message in
 * And that message goes in the generator
 */

function coroutine(g) {
  const it = g()
  return () => it.next.apply(it, arguments)
}

const run = coroutine(function*() {
  const x = 1 + (yield)
  const y = 1 + (yield)
  yield (x + y)
})

run()
run(10)
console.log(`Meaning of life: ${ run(30).value }`)


/**
 * It's entirely okay to partially consume a generator, when there's no more reference, it will get garbage collected
 */

/**
 * With Generators we have flow control again
 * What's magical about this flow control is that it looks synchronous. That's important because that's the way our brains work
 *
 * What we've done is taking asynchronity itself and factored it out as an implementation detail that we do not care about
 *
 * We write synchronous sequential blocking looking code and we let the library handle all the ugly bits
 * We now have a syntatic way of hiding all the complexity of a state machine
 *
 * Error handling becomes sychronous again
 */



var run2 = coroutine(function *() {
  const x = 1 + (yield getData(10))
  const y = 1 + (yield getData(30))
  const answer = (yield getData(`Meaning of Life ${(x + y)}`))
})

function getData(d) {
  setTimeout(() => {
    run2(d)
  }, 1000)
}

/**
 * Things brings back the problem of inversion control
 * Someone can call it.next incorrectly and screw everything up
 * We've solve the asynchronity to sync code looking issue, but not the inversion control, callback hell issue
 *
 * GENERATORS + PROMISES
 * Promises solve our inversion control, trust issues, flow control issue
 * Generators solve our non-local non synchronity reasonability issue
 * `yield promise` There's going to be some plumbing somewhere and when it calls it.next, it's going to get a promise.
 * It's going to say promise.then => resolves => it.next
 * The promise resumes the generator
 *
 * This is why generators are so powerful, they completely change the game in how we write our async code
 *
 * Bugs happen when you brain doesn't work like the code you are writing
 * Now we get to write code more closely to how our brains work
 *
 * This is new baseline in how to write async code in javascript
 *
 * Caveats
 * You can't CANCEL a running async function
 *
 * it.return will abort a generator
 * it.throw will send an error into a generator
 */


function* foo() {
  yield 'a'
  yield 'b'
  yield 'c'
}


for (const val of foo()) {
  console.log(val)
}

const [...values] = foo()
console.log(values)


