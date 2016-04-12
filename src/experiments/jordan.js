let Jordan = {
  add: function(num1, num2) {
    return num1 + num2; 
  },

  add2: function(num1, num2) {
    return num1 + this.add(num1, num2);
  },

  addc: function(num1, num2, cb) {
    cb(this.add(num1, num2));
  },

  addp: function(num1, num2) {
    return new Promise((res, rej) => {
      let value = this.add(num1, num2);

      setTimeout(() => {
        res(value);
      }, 500)
    })
  },

  addasync: function(num1, num2) {
    let self = this;
    return new Promise((res, rej) => {
      async function call(num1, num2) {
        let a = await self.addp(num1, num2)
        let b = await self.addp(a, a);
        return b
      }

      res(call(num1, num2));
    })
  },

  addAsync2: async function(num1, num2) {

    try {
      let a = await this.addp(num1, num2);
      let b = await this.addp(a, a);
      return b
    }
    catch(err) {
      return err;
    }
  }
}

module.exports = Jordan;
