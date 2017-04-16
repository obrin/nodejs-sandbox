import idb from 'idb';

// this function will be called if the browser hasn't heard about thi database before
// or if the version is less than the current
var dbPromise = idb.open('test-db', 1, function(upgradeDb) {
  var keyValStore = upgradeDb.createObjectStore('keyval');
  keyValStore.put("world", "hello");
});

// read "hello" in "keyval"
dbPromise.then(function(db) {
  var tx = db.transaction('keyval');
  var keyValStore = tx.objectStore('keyval');
  return keyValStore.get('hello');
}).then(function(val) {
  console.log('The value of "hello" is:', val);
});

// set "foo" to be "bar" in "keyval"
dbPromise.then(function(db) {
  var tx = db.transaction('keyval', 'readwrite');
  var keyValStore = tx.objectStore('keyval');
  keyValStore.put('bar', 'foo');
  return tx.complete;
}).then(function() {
  console.log('Added foo:bar to keyval');
});

dbPromise.then(function(db) {
  // TODO: in the keyval store, set
  // "favoriteAnimal" to your favourite animal
  // eg "cat" or "dog"
});


/************************************************************
 * Creating Object Stores and Indexing
 ************************************************************/


import idb from 'idb';

// this function will be called if the browser hasn't heard about thi database before
// or if the version is less than the current
var dbPromise = idb.open('test-db', 3, function(upgradeDb) {
  switch (upgradeDb.oldVersion) {
    case 0:
      var keyValStore = upgradeDb.createObjectStore('keyval');
      keyValStore.put("world", "hello");
    case 1:
      upgradeDb.createObjectStore('people', { keyPath: 'name' })
    case 2:
      var peopleStore = upgradeDb.transaction.objectStore('people')
      peopleStore.createIndex('animal', 'favoriteAnimal')
  }
});

// read "hello" in "keyval"
dbPromise.then(function(db) {
  var tx = db.transaction('keyval');
  var keyValStore = tx.objectStore('keyval');
  return keyValStore.get('hello');
}).then(function(val) {
  console.log('The value of "hello" is:', val);
});

// set "foo" to be "bar" in "keyval"
dbPromise.then(function(db) {
  var tx = db.transaction('keyval', 'readwrite');
  var keyValStore = tx.objectStore('keyval');
  keyValStore.put('bar', 'foo');
  return tx.complete;
}).then(function() {
  console.log('Added foo:bar to keyval');
});

dbPromise.then(function(db) {
  // TODO: in the keyval store, set
  // "favoriteAnimal" to your favourite animal
  // eg "cat" or "dog"

  var tx = db.transaction('keyval', 'readwrite')
  var keyValStore = tx.objectStore('keyval')
  keyValStore.put('dog', 'favoriteAnimal')
  return tx.complete
}).then(function() {
  console.log('added keyval')
})


dbPromise.then(function(db) {
  var tx = db.transaction('people', 'readwrite')
  var peopleStore = tx.objectStore('people')

  peopleStore.put({
    name: 'Jordan',
    age: 25,
    favoriteAnimal: 'dog'
  })

  peopleStore.put({
    name: 'Alex',
    age: 26,
    favoriteAnimal: 'dog'
  })

  peopleStore.put({
    name: 'John',
    age: 30,
    favoriteAnimal: 'cat'
  })

  return tx.complete
}).then(function() {
  console.log('added people')
})

dbPromise.then(function(db) {
  var tx = db.transaction('people')
  var peopleStore = tx.objectStore('people')
  var animalIndex = peopleStore.index('animal')

  return animalIndex.getAll('cat')
}).then(function(people) {
  console.log('people: ', people)
})

