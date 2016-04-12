var evtman = (function() {
  var subscribers = {};

  function subscribe(type, fn) {
    if (!subscribers[type]) {
        subscribers[type] = []
    }

    if (subscribers[type].indexOf(fn) == -1) {
      subscribers[type].push(fn)
    }
  }

  function unsubscribe(type, fn) {
    var listeners = subscribers[type];

    if (!listeners) {
      return;
    }

    var index = listeners.indexOf(fn);

    if (index > -1) {
      listeners.splice(index, 1)
    }
  }

  function publish(type, evtObj) {
    if (!subscribers[type]) {
      return;
    }

    if (!evtObj.type) {
      evtObj.type = type;
    }

    var listeners = subscribers[type];

    for (var ii = 0, ll = listeners.length; ii < ll; ii++) {
      listeners[ii](evtObj);
    }
  }

  return {
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    publish: publish
  }

})();

/**************************************************************/
/* Sample */
/**************************************************************/

function foo(evt) {
  console.log(evt.message)
}

evtman.subscribe("test/foo", foo);

evtman.publish("test/foo", { message: "Hello world"});

evtman.unsubscribe("test/foo", foo);