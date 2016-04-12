/**************************************************************/
/* Generators */
/**************************************************************/

function * asyncFunc_2(url) {
  const caller = yield;
  otherASync(url, result => caller.success(result));
}

function* echo(text, delay = 0) {
  const caller = yield;
  setTimeout(() => caller.success(text), delay);
}

function* demo(str) {
  var res = yield 10;
  if (res === 32) {
    return 42
  }
}

//var d = demo(10);
//console.log(d.next()); // TODO: REMOVE CONSOLE LOG
//console.log(d.next(31)); // TODO: REMOVE CONSOLE LOG



function* powersOfTwo(maxExponent) {
  var exponent = 0;
  while (exponent <= maxExponent) {
    yield Math.pow(2, exponent);
    exponent ++;
  }
}

//var it = pow ersOfTwo(10),
//  result = it.next();
//
//while (!result.done) {
//  console.log(result.value); //dispatch
//  result = it.next();
//}

var myGen = function* () {
  var one = yield 1;
  var two = yield 2;
  var three = yield 3;
  console.log(one, two, three); // TODO: REMOVE CONSOLE LOG
};

//var gen = myGen();
//var it = gen.next();
//console.log(gen.next()); // TODO: REMOVE CONSOLE LOG
//console.log(gen.next()); // TODO: REMOVE CONSOLE LOG
//console.log(gen.next(2)); // TODO: REMOVE CONSOLE LOG
//console.log(gen.next(3)); // TODO: REMOVE CONSOLE LOG

//while (!it.done) {
//  //console.log(it.value); // TODO: REMOVE CONSOLE LOG
//  it = gen.next(it.value);
//}

/*===================== NOTES =====================*/
// values can be passed into a generator which not only makes it an iterator
// but an observable as well
// can iterate infinitely

function* getValues() {
  yield 64;
  yield 2;
  return 71;
}

let v = getValues();
let itv = v.next();

//while (!itv.done) {
//  console.log(itv.value); // TODO: REMOVE CONSOLE LOG
//  itv = v.next();
//}

var delay = function(str) {
  return new Promise((resolved, rejected) => {
    setTimeout(function() {
      resolved(str)
    }, 1000)
  })
};

var delay_2 = function() {
  return new Promise((resolved, rejected) => {
    setTimeout(function() {
      resolved("HAHAHA===");
    }, 200)
  })
};

var delay_3 = function(str, cb) {
  setTimeout(function() {
    cb(str)
  }, 1000)
}
