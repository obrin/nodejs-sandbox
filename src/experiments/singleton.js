var dom = (function() {
    var _counter = 0;
    var instance = null;

    function generateId() {
      return "customId" + _counter++;
    }

    function create(tagName, id) {
      var el = document.createElement(tagName);

      el.id = id || generateId();

      return el;
    }

    function createInstance() {
      return {
        generateId: generateId,
        create: create
      }
    }

    return {
      getInstance: function() {
        return instance || (instance = createInstance());
      }
    }
  }
);

module.exports = dom;