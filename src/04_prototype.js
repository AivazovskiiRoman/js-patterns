/**
 * Prototype
 * The code implements the Prototype pattern using classes in JavaScript.
 * The Prototype pattern allows you to create new objects by cloning an
 * existing prototype object, enabling customization of individual instances
 * while keeping the base structure intact.
 */

class TeslaCar {
  constructor(model, price, interior, autopilot) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }

  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
  }
}

// Produce auto
const prototypeCar = new TeslaCar('S', 80000, 'black', false);

// Cloning the base auto
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

// Cloning for particular auto
car2.interior = 'red';
car3.interior = 'pink';
car3.autopilot = true;

console.log(car1);
/*
  Output:
  TeslaCar {
    model: 'S',
    price: 80000,
    interior: 'black',
    autopilot: false
  }
*/

console.log(car2);
/*
  Output:
  TeslaCar {
    model: 'S',
    price: 80000,
    interior: 'red',
    autopilot: false
  }
*/

console.log(car3);
/*
  Output:
  TeslaCar {
    model: 'S',
    price: 80000,
    interior: 'pink',
    autopilot: true
  }
*/
