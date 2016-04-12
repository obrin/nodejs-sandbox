/************************************************************
 * Creational Patterns
 ************************************************************/


var o = {}; // Creates a new object

// Example of an object property added with defineProperty with a data property descriptor
Object.defineProperty(o, 'a', {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(o);


var obj = {};
Object.defineProperties(obj, {
  "property1": {
    value: true,
    writable: true
  },
  "property2": {
    value: "Hello",
    writable: false
  }
  // etc. etc.
});

console.log(obj); // TODO: REMOVE CONSOLE LOG