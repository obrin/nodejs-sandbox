var FUNC_ERROR_TEXT = 'Expected a function';

function checkPromise(fn) {
  return typeof fn.then === 'function'
}

function compose(...funcs) {
  funcs.reverse()
  const length = funcs.length
  let index = length
  // let promise = Promise.resolve(params);
  let isPromise = false

  while(index--) {
    if (typeof funcs[index] != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }

    /**
     * If one of the composed function is a promise then the
     * composition should return a promise
     */
    if (!isPromise && checkPromise(funcs[index])) {
      isPromise = true
    }
  }

  return function (...args) {
    let index = 0
    let results = length ? funcs[index].apply(this, args) : args[0]

    if (isPromise) {
      let promise = Promise.resolve(results);

      while(++index < length) {
        promise = promise.then(function next (res) {
          return funcs[index].call(this, res)
        })
      }
      return promise
    }

    while(++index < length) {
      results = funcs[index].call(this, results)
    }

    return results
  }
}

function fakeApi(res) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res + 2)
    }, 1000)
  })
}

function one(res) {
  return res + 1
}

function two(res) {
  return res + 2
}

const process = compose(fakeApi, two, one)

console.log('----===========')
async function run() {
  const data = process(1).then(res => console.log('-------res', res))
  // console.log('results-----', data)
}

run()




function createFlow(fromRight) {
  return baseRest(function(funcs) {
    funcs = baseFlatten(funcs, 1);

    var length = funcs.length,
      index = length;

    if (fromRight) {
      funcs.reverse();
    }
    while (index--) {
      if (typeof funcs[index] != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
    }
    return function() {
      var index = 0,
        result = length ? funcs[index].apply(this, arguments) : arguments[0];

      while (++index < length) {
        result = funcs[index].call(this, result);
      }
      return result;
    };
  });
}
