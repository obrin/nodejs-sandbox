/*
 * Setting up block level variable to store class state
 * , set's to null by default.
 */
let instance = null;
/*
export default class Cache{
  constructor() {
    if(!instance){
      instance = this;
    }

    // to test whether we have singleton or not
    this.time = new Date();

    return instance;
  }
}
*/

export default class Cache{
  constructor() {
    instance = instance || this;
    // to test whether we have singleton or not
    this.time = new Date();

  }
}