/**
 * Singleton
 * The code implements the Singleton pattern using a Counter class.
 */

let instance;

class Counter {
  constructor() {
    if (!instance) {
      instance = this;
    }
    instance.count = 0;

    return instance;
  }

  getCount() {
    return instance.count;
  }

  instanceCount() {
    return instance.count++;
  }
}

// test

const myCount1 = new Counter();
const myCount2 = new Counter();
const myCount3 = new Counter();

myCount1.instanceCount();
myCount1.instanceCount();

myCount2.instanceCount();
myCount2.instanceCount();
myCount2.instanceCount();
myCount2.instanceCount();

myCount3.instanceCount();

console.log(myCount1.getCount()); // Output: 7
console.log(myCount2.getCount()); // Output: 7
console.log(myCount3.getCount()); // Output: 7
