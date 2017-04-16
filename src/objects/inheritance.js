/**
 Difference between class & prototypal

 - JS object sys is based on prototypes, not classes

 Classes Inheritance
 - A class is like a blueprint — a description of the object to be created
 - Classes inherit from classes and create subclass relationship
 - Hierarchical class taxonomies
 - Instances are typically instantiated via constructor functions with the `new` keyword
 - In JS class inheritance is implemented on top of prototypal inheritance, but does not mean the same thing

 Prototypal Inheritance
 - A prototype is a working object instance
 - Objects inherit directly from other object
 - Instances may be composed from many different source objects
 - *Class taxonomies are not an automatic side-effect of prototypal OO
 - Instances are typically instantiated via factory functions, object literals, or `Object.create()`

 Importance
 - Inheritance is a code reuse mechanism: A way for different kinds of objects to share code
 - Class inheritance creates parent/child object taxonomies as a side-effect
 - Taxonomies are virtually impossible to get rich for all new use cases
 - Widespread use of a base class leads to the fragile base class problem

 Problems with Class Inheritance
 - Tight coupling problem
 - Fragile base class problem
    - Inflexible hierarchy problem
 - Eventually all evolving hierarchies are wrong for new uses
    - Duplication by necessity problem
 - due to inflexible hierarchies, new use cases are often shoe-horned in by duplicating, rather than adapting existing code
 - Gorilla/banana problem
    - What you wanted was a banana, but what you got was a gorilla holding the banana, and the entire jungle

 “Favor object composition over class inheritance.”
 ~ The Gang of Four, “Design Patterns: Elements of Reusable Object Oriented Software”

 Three kinds or prototypal OO

 - Concatenate Inheritance
 - Source prototypes commonly referred to as mixing
 - `Object.assign()`
 - Prototype Delegation
 - If a property is not found on the object, the lookup is delegated to the delegated prototype
 - Functional Inheritance
 - Works by producing an object from a factory
 - Extends the produced object by assigning properties to it directly (using concatenate inheritance)
 **/


/******* Old And Busted ***************************************************/

/**************************************************************/
/* Delegate Prototype */
/**************************************************************/
function old() {
  function Greeter() {
    this.name = name || 'John Doe'
  }

  Greeter.prototype.hello = function hello() {
    return 'Hello, my name is ' + this.name
  }

  var george = new Greeter('George')

}

// dynamic object extension
function newMethod() {
  var proto = {
    hello: function hello() {
      return 'Hello, my name is ' + this.name
    }
  }

  var george = Object.create(proto)
  george.name = 'George'
}

/**************************************************************/
/* Cloning/Concatenation */
/**************************************************************/
function mixinStyle() {
  var proto = {
    hello: function hello() {
      return 'Hello, my name is ' + this.name
    }
  }

  var george = Object.assign({}, proto, { name: 'George' })
}


/**
 Use Factory Functions
 - Lke constructors, but you don't need new or this
 - Mix and match all three types of prototypes
 - Use .call() and .apply() to swap out source prototypes at instantiation time
 **/













