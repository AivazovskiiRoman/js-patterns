/**
 * Factory Method
 * The code demonstrates the Factory Method pattern implementation.
 */

class BMW {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

// Factory

class BMWFactory {
  create(type) {
    switch (type) {
      case 'X5':
        return new BMW(type, 108000, 300);
      case 'X6':
        return new BMW(type, 118000, 320);
      case 'X7':
        return new BMW(type, 128000, 350);
      default:
        break;
    }
  }
}

// Test
const factory = new BMWFactory();

const x5 = factory.create('X5');
const x6 = factory.create('X6');
const x7 = factory.create('X7');

console.log('x5: ', x5);
// Output: x5:  BMW { model: 'X5', price: 108000, maxSpeed: 300 }

console.log('x6: ', x6);
// Output: x6:  BMW { model: 'X6', price: 118000, maxSpeed: 320 }

console.log('x7: ', x7);
// Output: x7:  BMW { model: 'X7', price: 128000, maxSpeed: 350 }
