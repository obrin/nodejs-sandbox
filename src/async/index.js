/**
 * JOBS
 * `Job Queue` is a queue hanging off at the end of every tick in the event loop queue
 * It's kinda like saying, "oh, here's this other thing I need to do later, but make sure it happens right away before anything else can happen."
 */

console.log( "A" );

setTimeout( function(){
  console.log( "B" );
}, 0 );

// theoretical "Job API"
schedule( function(){
  console.log( "C" );

  schedule( function(){
    console.log( "D" );
  } );
} );

//You might expect this to print out A B C D, but instead it would print out A C D B,
// because the Jobs happen at the end of the current event loop tick

/**
 * WHAT IS CALLBACK HELL?
 * - Inversion of control
 * - Non local, Non sequential reasoning
 * - Deficiency of the callbacks pattern alone when you don't have anything else but the callback
 * It's not capable of addressing these major deficiencies. Inversion of control and non local, non sequential reasoning
 *
 * Callbacks are the atomic fundamental building block upon which everything we are doing
 * Even generators has still got callbacks happening
 *
 * Without those additional patterns on top the callbacks are not capable of addressing these issues
 * So we need higher order patterns on top of them to address those problems
 *
 *
 * WHAT IS A PROMISE?
 * - Future value
 * - Completion event
 * - Callback manager - manages callbacks in a way that give us that trust back by passing them back into the promise system
 *
 * Instead of giving third parties to manage our callbacks, we give them to the promise to manage them
 *
 * HOW DO WE COMBINE GENERTORS AND PROMISES FOR FLOW CONTROL
 * yield the promise and have the promise call next on the iterator
 */

/**
 * THUNKS
 * Didn't really have much solutions but gave us a conceptual underpinning for values that are time independent
 * Removing time from the complexity
 *
 * PROMISES
 * Thunks led us to promises and are not only that but a solution to inversion of control because they are built with a trustable/predictable system around callbacks are behaving
 *
 * GENERATORS
 * Give us localies pausable stack
 *
 * OBSERVABLES
 * Adapts event based programming - lots of events that we deal with in modern complex APIs
 *
 * CSP
 * If Observables are just over the horizon. CSP is the thing that's coming right behind it
 * A couple years from now, everyone's gonna be thinking, wow why didn't i get on the CSP train earlier
 * 
 */
