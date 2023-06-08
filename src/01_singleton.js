/**
 * Singleton *
Explanation:
The code implements the Singleton pattern using a Counter class. The instance variable is declared outside the class and serves as the reference to the single instance of the Counter.
When creating a new instance of Counter using new Counter(), the constructor checks if the instance variable is already assigned. If it is, it returns the existing instance. If not, it assigns this to instance, effectively creating the first instance.
In the provided code, three instances myCount1, myCount2, and myCount3 are created. However, since the Singleton pattern restricts instantiation to a single object, all three variables reference the same instance.
The instanceCount() method increments the count property of the shared instance. Calling instanceCount() multiple times on any of the three instances will increment the count value.
In the code provided, the instanceCount() method is called on myCount1 twice, myCount2 four times, and myCount3 once. This results in the count property being incremented a total of seven times.
Thus, when getCount() is called on any of the three instances, it will return 7 since they all reference the same shared instance with the incremented count value.
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
