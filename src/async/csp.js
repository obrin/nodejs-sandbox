/**
 * COMMUNICATING SEQUENTIAL PROCESSES (CSP)
 * CSP is about modeling concurrency with channels
 * Concurrency (+ Channels)
 *
 * A pattern invented back in the 60's
 *
 * A channel is kind of like a stream/pipe except that the pipe has no buffer size and therefore has this notion
 * automatically built into it called back pressure
 *
 * BACK PRESSURE
 * Imagine two different ends of a hose, one person holding each end where they don't see or communicate with each other
 * Person A decides to pour some water down the house and the guy on the other end has the water coming out and his spraying it
 * At some point the guy that's spraying the water says I don't want anymore water, but he doesn't have communication with the other guy
 * So how's he going to tell this guy, I don't want anymore water.
 * He can cap off the hose, so on the other end no more water can go in because the water is completely filled up
 * That's back pressure
 *
 * It's a way of communicating up from consumer to producer to stop producing
 *
 * Another way of modeling that signal is to use a Channel in a CSP system
 * - You can't send me something until I'm ready to take it
 * - I can't take something until your ready to send it
 * - There's no queue
 *
 * ACTOR MODEL of concurrency
 * - has close relationship with CSP
 * - Major difference is that actors, when you send a message it is asynchronous
 * - CSP, when you send a message it's synchronous (semantics)
 *
 * CSP is about modeling your application with lots of tiny pieces called processes
 * If javascript had full threading to it, then every independent piece will be on it's own thread
 * running entirely independent of everyone else
 * However there are times when these two individual pieces need to coordinate with each other
 * As soon as the messages are passed (coordination) they are unblocked and continue being independent
 *
 * That's what it means by processes, that these could in theory run individually
 *
 * We know in Javascript that things are running independently like that
 * But there is something in JS that can just block itself and not affect any other part of the application - Generators
 *
 * What if we had a bunch of generators that were all running at a bunch of different places and running independently of each other
 * And at some point the two generators say 'hey we need to coordinate with each other, so lets have a communication channel so we can both block each other waiting for the other to show up'
 * as soon as both shows up, we can send a message back and go back to being independent
 *
 * It's more complicated, but also much more powerful
 * Because we can model every single independent piece of our application totally separate of everything else
 * All we have to think about, is that when i need a message I wait for the message
 * or when i need send a message i wait for the sending of the message
 * Other than that there's no other knowledge of other parts of the application
 *
 * Theoretically the implementation can take each one of those individual processes and put them on an entirely seperate thread
 * and the application would still entirely work the same way
 *
 * This model is so powerful it is the model of concurrency in GO, Clojurescript
 *
 * That's why go has so much better performance to it
 *
 */
import csp from 'js-csp'

const ch = csp.chan()

function *process1() {
  yield put(ch, 'Hello')
  const msg = yield take(ch)
  console.log(msg) // Hello World
}

function *process2() {
  const greeting = yield take(ch)
  yield put(ch, greeting + ' World')
  console.log('done!')
}

/**
 * It does not matter who gets there first
 * I don't need to worry about where there's a message waiting for me or not, It'll just say i wanna take a message
 * and I'll wait until one is ready, maybe its ready right now otherwise I'll wait
 * I can push a message down, I don't have to know if someone is ready to get it, I'm just going to wait until somebody is ready to take my message
 *
 */

/**
 * This is the most powerful method of concurrency management
 */



const ch = csp.chan()

/**
 * While true loop is going let those processes run forever to model individual processes that run the application
 * And they're all running independently
 */
csp.go(function*() {
  while (true) {
    yield csp.put(ch, Math.rand())
  }
})

csp.go(function*() {
  while (true) {
    yield csp.take( csp.timeout(500) )
    const num = yield csp.take(ch)
    console.log(num)
  }
})

/**
 * You can push a message down any faster than the other person on the end is consuming it
 */


// managing many different channels like Promise.race
csp.go(function*() {
  while (true) {
    const msg = yield csp.alts(ch1, ch2, ch3)
    console.log(msg)
  }
})

// Table Tennis
csp.go(function*() { // referee
  const table = csp.chan()

  csp.go(player, ['ping', table])
  csp.go(player, ['pong', table])

  yield csp.put(table, { hits: 0 })
  yield csp.timeout(1000)
  table.close()
})

function *player(name, table) {
  while (true) {
    const ball = yield csp.take(table)
    if (ball === csp.CLOSED) {
      console.log(`${name} : Game finished`)
      return
    }
    ball.hits += 1;
    console.log(`${name} ${ball.hits}`)
    yield csp.timeout(100) // add latency
    yield csp.put(table, ball)
  }
}

/**
 * We can adapt to user interface elements by having events fire and pushing things down the channel
 *
 * Major difference between modeling streams and channels is back pressure
 * Because we can say, i don't want you to send me anything else until I'm ready to take it, that comes for free
 * Don't take from the channel and that becomes an automatically built in back pressure
 */

function fromEvent(el, eventType) {
  const ch = csp.chan()
  $(el).bind(eventType, function(evt) {
    // Not csp.put because your not inside of a generator, but inside a click handler
    // putAsync returns a promise if i wanted to listen to be told when the put had been completed
    // looks like streams - major difference is back pressure
    csp.putAsync(ch, evt)
  })
  return ch
}

csp.go(function*() {
  const ch = fromEvent(el, 'mousemove')
  while (true) {
    const evt = yield csp.take(ch)

    console.log(`${evt.clientX} , ${evt.clientY}`)
  }
})

/**
 * You can buffer channels
 */

/**
 * Layer on the backpressure semantic to the blocking synchronous looking generators
 * and you get CSP
 */


/**
 * POC
 * What's happening in JS CSP is that we are modeling these processes as generators within the same JavaScript program
 * Which is great because we get the independence, the semantics of blocking and etc
 * But from a performance perspective, these generators are not running on separate threads
 * So we're not really getting the full power of something like GO and ClosureScript; the way they model stuff
 * Because we're not actually using multiple threads here, we're using one single blocking JS event
 *
 * What if you create a channel for usage of CSP where the channel itself is implemented as a bridge to a remote thread
 * What if you could have one processor/generator in the browser and another could be on the server?
 * Two different go routines that could communicate with each other, exactly the same way by using the channel semantic
 * And the channel figure out how to bridge across a remote wire
 *
 * What if you could do this between the browser and a WebWorker?
 *-------
 * WEB WORKERS
 * A WebWorker runs on a separate worker thread
 * HTML5 is bringing us true multi-threading capability via Web Workers
 * ideal for running scripts in background threads, so that they don't interfere with the user interface (UI)
 *
 * WEB WORKERS LIMITATIONS
 * - Web Workers operate independently of the main browser UI thread so they're not able to access many of its objects
 * - Cannot access the DOM; can't read or modify the HTML document
 * - Can't access any global variables or JavaScript functions within the main page.
 * ------
 * Have a remote WebWorker and spin up a go routine
 * If you can do it in one of the WebWorker then you can spin up thousands of them running independent GO routines
 * And communicate with all of them through channels
 */
