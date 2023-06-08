/**
 * Abstract Factory
 * The code snippet provided implements the Abstract Factory pattern in JavaScript.
 * It consists of two factory functions, sportCarFactory and familyCarFactory, which create instances of the Z4 and X7 classes, respectively.
 * The bmwProducer function acts as an abstract factory, selecting the appropriate factory based on the kind of car requested.
 */

function bmwProducer(kind) {
  return kind === 'sport' ? sportCarFactory : familyCarFactory;
}

// Factories
function sportCarFactory() {
  return new Z4();
}
function familyCarFactory() {
  return new X7();
}

class Z4 {
  info() {
    return 'Z4 is a sport car!';
  }
}

class X7 {
  info() {
    return 'X7 is family car!';
  }
}

// Test (order the car)
const produce = bmwProducer('sport');

const hisCar = new produce();

console.log(hisCar.info()); // Output: Z4 is a sport car!

const produce2 = bmwProducer();

const myCar = new produce2();

console.log(myCar.info()); // Output: X7 is a family car!
