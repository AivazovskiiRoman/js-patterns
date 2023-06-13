/**
 * Composite design pattern
 * The code demonstrates the Composite design pattern, which allows objects to
 * be composed into tree-like structures to represent part-whole hierarchies.
 * In this example, we have different equipment classes representing individual
 * components of a car (Engine, Body, and Tools), all extending the Equipment
 * class.
 */

class Equipment {
  getPrice() {
    return this.price || 0;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  setPrice(price) {
    this.price = price;
  }
}

class Engine extends Equipment {
  constructor() {
    super();
    this.setName('Engine');
    this.setPrice(30000);
  }
}

class Body extends Equipment {
  constructor() {
    super();
    this.setName('Body');
    this.setPrice(28000);
  }
}

class Tools extends Equipment {
  constructor() {
    super();
    this.setName('Tools');
    this.setPrice(16000);
  }
}

// Composite
class Composite extends Engine {
  constructor() {
    super();
    this.equipments = [];
  }

  add(equipment) {
    this.equipments.push(equipment);
  }

  getPrice() {
    return this.equipments.map((e) => e.getPrice()).reduce((a, b) => a + b);
  }
}

// Test
class Car extends Composite {
  constructor() {
    super();
    this.setName('BMW');
  }
}

const myCar = new Car();

myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools());

console.log(`${myCar.getName()} price is ${myCar.getPrice()}`);
// Output: BMW price is 74000
