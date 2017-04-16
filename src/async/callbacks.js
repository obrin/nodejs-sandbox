/**
 * LACK OF SYNCHRONITY
 * As soon as we introduce a single continuation in the form of callbacks
 * we have allowed a divergence to form between how our brains work and the way the code will operate.
 * As soon as these two diverge, we run into the inevitable fact that our code becomes harder to understand, reason about, debug and maintain
 *
 * Our brain work kinda like an event loop queue
 * What we're most likely doing instead of multitasking is acting as fast context switchers
 * We do it so fast that to the outside world it appears as if we're doing things in parallel
 *
 */

/**
 * TRUST ISSUES
 * C gets deferred to happen later, and under the control of another party -- in this case `ajax`
 * Thought infrequent, it's one of the worst and most subtle problems about callback-driven design
 * This is called `inversion control` when you take part of your program and give over control of its execution to another third party
 * There's an unspoken contract -- a set of things you expect to be maintained
 */

// A
ajax( "..", function() {
  // C
});
// B


/**
 * most of us agree that at least to some extent we should build our own internal functions
 * with some defensive checks on the input parameters, to reduce/prevent unexpected issues.
 *
 * So, doesn't it stand to reason that we should do the same thing about composition of async function callbacks,
 * not just with truly external code but even with code we know is generally "under our own control"? Of course we should.
 *
 * But callbacks don't really offer anything to assist us. We have to construct all that machinery ourselves,
 * and it often ends up being a lot of boilerplate/overhead that we repeat for every single async callback.
 *
 * We need a generalized solution to all of the trust issues, one that can be reused for as many callbacks as we create
 * without all the extra boilerplate overhead.
 */

