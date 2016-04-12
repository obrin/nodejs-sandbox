
module.exports = (function() {
  return function(data) {
    if(data === undefined) throw(new Error("data must be defined"))
    this.data = data;
  }
}());