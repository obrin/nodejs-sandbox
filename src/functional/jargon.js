// https://github.com/hemanth/functional-programming-jargon
/**
 * ARITY
 * the number of arguments the function takes
 * - variable number of arguments is called "variadic,"
 */

// function with an arity of two
const sum = (a, b) => a + b;

const arity = sum.length;
console.log(arity); // 2

// The arity of sum is 2


/**
 * Higher-Order Functions (HOF)
 * A function which takes a function as an argument and/or returns a function.
 */
const filter = (pred, xs) => {
  const result = [];
  for (let idx = 0; idx < xs.length; idx++) {
    if (pred(xs[idx])) {
      result.push(xs[idx]);
    }
  }
  return result;
};

const is = (type) => (x) => Object(x) instanceof type;

filter(is(Number), [0, '1', 2, null]); // [0, 2]


/**
 * Predicate
 * - A predicate is a function that returns true or false for a given value
 */


/**
 * Functor
 * An object that implements a map function which, while running over each value in the object to produce a new object, adheres to two rules:
 */

// preserves identity
// const ident = object.map(x => x) === object
//and
// composable
// const comp = object.map(x => f(g(x))) === object.map(g).map(f)
