/**************************************************************/
/* Binding Object To Function */
/**************************************************************/

(function iffe() {
  function foo() {
    console.log(this.bar)
  }

  var obj = { bar: "bar" };
  var obj2 = { bar: "bar2" };

  var orig = foo;
  foo = function() {
    orig.call(obj)
  };

  //foo(); // "bar"
  //foo.call(obj2); // "bar"

}());


/******* Bind Utility [Hard Binding] ***************************************************/

(function iife() {
  function bind(fn, o) {
    return function() {
      fn.call(o);
    };
  }

  function foo() {
    console.log(this.bar);
  }

  var obj = { bar: "bar" };
  var obj2 = { bar: "bar2" };

  foo = bind(foo, obj);

  //foo(); // "bar"
  //foo.call(obj2); // "bar"

}());

// Put the bind utility unto the function prototype

(function iffe() {

  // Bind to prototype if bind proto does not exists
  if (!Function.prototype.bind2) {
    Function.prototype.bind2 =
      function(o) {
        var fn = this; // the function
        return function() {
          return fn.apply(o, arguments)
        };
      };
  }

  function foo(baz) {
    console.log(this.bar + " " + baz);
  }

  var obj = { bar: "bar" };
  foo = foo.bind2(obj);

  foo("baz"); // "bar baz"
}());



