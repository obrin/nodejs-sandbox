/*
module.exports = {
  init: function() {
    console.log('initialized'); // TODO: REMOVE CONSOLE LOG
    return this;
  },
  creater: function() {
    console.log('hello'); // TODO: REMOVE CONSOLE LOG
    return this;
  }
};

*/

module.exports = {
  hello() {
    console.log('hello'); // TODO: REMOVE CONSOLE LOG
  },
};


export default class Jordan {
  constructor(contents = []) {
    this.contents = [...contents]
  }

  pop() {
    var value = this.contents[0];
    //console.log(this.contents); // TODO: REMOVE CONSOLE LOG
    this.contents.splice(0,1);
    return value;
  }

  add() {
    this.contents.push('added');
    return this;
  }

  test() {
    console.log('yo'); // TODO: REMOVE CONSOLE LOG
  }

}