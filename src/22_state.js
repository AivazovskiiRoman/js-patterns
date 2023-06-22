/**
 * State
 * The State design pattern is a behavioral pattern that allows an object to
 * alter its behavior when its internal state changes. It encapsulates states
 * into separate classes and delegates the behavior to the current state. This
 * pattern promotes the principle of encapsulation by representing each state
 * as an object, and allows the object to change its behavior at runtime by
 * switching between different state objects.
 */

class OrderStatus {
  constructor(name, nextStatus) {
    this.name = name;
    this.nextStatus = nextStatus;
  }

  next() {
    return new this.nextStatus();
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super('WaitingForPayment', Shipping);
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super('Shipping', Delivered);
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super('Delivered', Delivered);
  }
}

class Order {
  constructor() {
    this.state = new WaitingForPayment();
  }

  nextState() {
    this.state = this.state.next();
  }
}

// Test
const myOrder = new Order();
console.log(myOrder.state.name); // Output: WaitingForPayment

myOrder.nextState();
console.log(myOrder.state.name); // Output: Shipping

myOrder.nextState();
console.log(myOrder.state.name); // Output: Delivered
