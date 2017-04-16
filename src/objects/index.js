/**
 * Question
 * Difference between `new Object()` and object literal notation
 */

/**
 * Answer
 * There are no difference for a simple object without methods
 * However, there is a big difference when adding methods to object
 */

// Literal way
function ObjL(prop) {
  return {
    p: prop,
    sayHello: function () {
      console.log(this.p)
    }
  }
}

// Prototype way
function ObjP(prop) {
  this.p = prop
}

ObjP.prototype.sayHello = function() {
  console.log(this.p)
}

/**
 * Both ways allow creation of instances of Obj like this:
 * var foo = new Obj('hello')
 *
 * However, with the literal way, you carry a copy of th `sayHello` method within each instance of objects
 * Whereas, with the prototype way, the method is defined in the object prototype and shared between all object instances
 * If you have a lot of object or methods, the literal way can lead to quite a big memory waste
 */


/**********************************************************/
/**
 * Question
 * Difference between Object.create() and new SomeFunction()
 */

/**
 * Answer
 * new X is Object.create(X.prototype) with additionally running the constructor function
 * And giving the constructor the chance to return the actual object that should be the result of the expression instead of `this`
 */

/**
  new Test():
  1. create new Object() obj
  2. set obj.__proto__ to Test.prototype
  3. return Test.call(obj) || obj;
  normally obj is returned but constructors in JS can return a value

  Object.create( Test.prototype )
  1. create new Object() obj
  2. set obj.__proto__ to Test.prototype
  3. return obj;

  So basically Object.create doesn't execute the constructor.
**/

/**********************************************************/
/**
 * describe `this` keyword
 */

/**
 * Answer
 * https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes
 * `this` is not an author-time binding but a runtime binding
 * It is contextual based on the conditions of the functions invocation
 * When a function is invoked, an execution context is created
 * This record contains information about where the function was called from (the call-stack), how the function was invoked, what parameters were passed, etc
 *
 * `this` is actually a binding that is made when a function is invoked,
 * and what it references is determined entirely by the call-site where the function is called
 */

function thisKeyword() {
  function foo() {
    console.log(this.bar)
  }

  var bar = 'bar1'
  var o2 = { bar: 'bar2', foo: foo }
  var o3 = { bar: 'bar3', foo: foo }
  foo()     // 'bar1'
  o2.foo()  // 'bar2'
  o3.foo()  // 'bar3'
}

/**********************************************************/
/**
 * Describe new keyword
 **/

/**
 * When we put a new keyword into any function call, it turns that function call into a constructor call
 * It's a modification to way the function is being called
 * the new keyword does four things with order of precedence
 * 1. a brand new object will be created
 * 2. that object gets linked to another object
 * 3. that new object gets bound to a this keyword for the purpose of that function call
 * 4. if that function does not return anything, it will implicitly return this
 *
 * The new keyword is the most precedent of the rules
 */

function newKeyword() {
  function foo() {
    this.baz = 'baz'
    console.log(this.bar + ' ' + baz)
    // if no return, then `this` is implicitly returned
  }

  var bar = 'bar'
  var baz = new foo() // undefined undefined
}

/**
 * this: new, order of precedence
 * 1. Was the function called with `new`?
 * 2. Was the function called with `call` or `apply` specifying and explicit `this`?
 * 3. Was the function called via a containing object (context)?
 * 4. DEFAULT: global object (except strict mode)
 */

function newOrderOfPrecedence() {
  function something() {
    this.hello = 'hello'
    console.log(this.hello, this.who)
  }

  var who = 'global'
  var foobar
  var bazbam
  var obj1 = { who: 'obj1', something: something }
  var obj2 = { who: 'obj2' }

  //something()              // 'hello' 'global' => only works in non-strict mode
  //console.log(hello)       // 'hello'          => only works in non-strict mode

  obj1.something()           // 'hello' 'obj1'
  console.log(obj1.hello)    // 'hello'           => will be undefined with obj1.something() was not instantiated

  obj1.something.call(obj2)  // 'hello' 'obj2'
  console.log(obj2.hello)    // 'hello'

  foobar = something.bind(obj2)
  foobar()                        // 'hello' 'obj2'
  foobar.call(obj1)               // 'hello' 'obj2'  => binding has taken precedence

  bazbam = new something()        // 'hello' 'undefined'
  console.log(bazbam.hello)       // 'hello'

  bazbam = new obj1.something()   // 'hello' 'undefined'
  bazbam = new foobar()           // 'hello' 'undefined'

}

/**********************************************************/
/**
 * Prototypes
 **/

function prototypes() {
  function Foo(who) {
    this.me = who
  }

  Foo.prototype.identify = function() {
    return 'I am ' + this.me
  }

  var a1 = new Foo('a1')

  a1.identify = function() { // <-- Shadowing
    // Bad Hack to achieve polymorphism
    console.log('Hello, ' + Foo.prototype.identify.call(this) + '.')
  }

  a1.identify()     // 'Hello, I am a1,'

  var a2 = new Foo('a2')

  a2.speak = function() {
    console.log(this.identify())
  }

  a2.speak() // 'I am a2.'


  var t1 = a1.constructor === Foo
  var t2 = a1.constructor === a2.constructor
  // __proto__ also known as dunder proto that lies in the built in Object.prototype
  // __proto__ returns the internal prototype linkage
  // [[prototype]] is the internal link, the public link is __proto__
  // http://www.2ality.com/2012/10/proto.html
  var t3 = a1.__proto__ == Foo.prototype
  var t4 = a1.__proto__ == a2.__proto__

  var t5 = a1.__proto__ === Object.getPrototypeOf(a1)
  var t6 = a2.constructor === Foo
  var t7 = a2.__proto__ == a2.constructor.prototype


  function Bar(who) {
    Foo.call(this, who)
  }

  Bar.prototype = Object.create(Foo.prototype)

  Bar.prototype.speak = function() {
    console.log('hello, ' + this.identify() + '.')
  }

  var b1 = new Bar('b1')

  b1.speak()                  // 'Hello, I am b1.'
}

