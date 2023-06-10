/**
 * Decorator pattern
 * The Decorator pattern is a design pattern that allows behavior to be added to an object dynamically at runtime
 * without affecting the behavior of other objects of the same class. It is a structural pattern that follows
 * the principle of open-closed design, allowing the addition of new functionality to an object without
 * modifying its structure.
 */

class Car {
  constructor() {
    this.price = 10000;
    this.model = 'Car';
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model;
  }
}

// Create a tesla
class Tesla extends Car {
  constructor() {
    super();
    this.price = 25000;
    this.model = 'Tesla';
  }
}

// Decorators
class ThreeDViewSystem {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 3000;
  }

  getDescription() {
    return `${this.car.getDescription()} with the 3D parking system`;
  }
}

class Wheels18inch {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 2000;
  }

  getDescription() {
    return `${this.car.getDescription()} with 18" wheels`;
  }
}

// Test
let tesla = new Tesla();
tesla = new Wheels18inch(tesla);
tesla = new ThreeDViewSystem(tesla);

console.log(tesla.getDescription(), tesla.getPrice()); // Output: Tesla with 18" wheels with the 3D parking system 30000
