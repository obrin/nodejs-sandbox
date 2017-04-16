
var makeCache = function(getter) {
  var value, ready, waiting = [];

  return {

    reset: function() {
      value = null;
      ready = false;
      waiting = [];
    },

    get: function(done) {
      if (ready) {
        done(value);
      } else {
        waiting.push(done);

        if (waiting.length === 1) {
          getter(function(got) {

            value = got;
            ready = true;

            waiting.forEach(function(w) { w(value); });
            waiting = null;
          });
        }
      }
    }
  };
};

function cacheWrap(wrappedFn) {
  var value
  var error = null
  var ready
  var pendingCb = []

  function get(done) {
    // when the value has already been fetched before, return its cached value
    if (ready) {
      return done(error, value)
    }

    // pending callbacks to be executed when ready
    pendingCb.push(done)

    // prevents async function from being called more than once
    if (pendingCb.length === 1) {
      wrappedFn(function(err, res) {
        value = res
        error = err || null
        ready = true

        // execute all pending callbacks when ready
        pendingCb.forEach(function(cb) { cb(error, value) })

        pendingCb = []
      })
    }
  }
  return { get }
}
