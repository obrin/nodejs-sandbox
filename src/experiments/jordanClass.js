export class Jordan {
  
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  addPromise(num1, num2) {
    return new Promise((resolve, reject) => {
      reject(new Error('error'));
      resolve(num1 + num2);
    })
  }



  async addAsync(num1, num2) {
    try {
      let a = await this.addPromise(num1, num2)
                .then(res => console.log(res))
                // .catch (err => console.log(err))
      console.log('continues');
      let b = await this.addPromise(a, a);
      return b;
    }
    catch(err) {
      console.log('error caught', err);
      // return err;
    }
  }
}

export class Son extends Jordan {
  constructor(name, age) {
    super(name, age);
  }

  minusPromise(num1, num2) {
    return new Promise((resolve, reject) =>  {
      resolve(num1 - num2);
    })
  }
}
