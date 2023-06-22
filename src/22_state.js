// State

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
