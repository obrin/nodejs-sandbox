
function timeout(time) {
  return {
    forEach: function(observer) {
      var handle =
        setTimeout(() => {
          observer.onNext(undefined);
          observer.onCompleted();
        }, time);

      return {
        dispose: function() {
          clearTimeout(handle)
        }
      }
    }
  }
}

function fromEvent(dom, eventName) {
  return {
    forEach: function(observer) {
      handler = (e) => {
        observer.onNext(e);
        observer.onCompleted();
      };
      dom.addEventListener(eventName, handler);

      return {
        dispose: function() {
          dom.removeEventListener(eventName, handler)
        }
      }
    }
  }
}