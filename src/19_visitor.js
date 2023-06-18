/**
 * Visitor
 * The Visitor design pattern allows you to separate the operations performed
 * on an object from the object's structure. It provides a way to add new
 * operations to an object structure without modifying the objects themselves.
 */

// Parent class with visitor
class Car {
  accept(visitor) {
    visitor(this);
  }
}

// Some cars
class Ford extends Car {
  info() {
    return 'It is a Ford car.';
  }
}

class Bmw extends Car {
  info() {
    return 'It is a BMW car.';
  }
}

class Maserati extends Car {
  info() {
    return 'It is a Maserati car.';
  }
}

function exportVisitors(car) {
  if (car instanceof Ford) {
    car.export = console.log(`Exported data: ${car.info()}`);
  } else if (car instanceof Bmw) {
    car.export = console.log(`Exported data: ${car.info()}`);
  } else if (car instanceof Maserati) {
    car.export = console.log(`Exported data: ${car.info()}`);
  }
}

// Test
const ford = new Ford();
const bmw = new Bmw();

console.log(ford.accept(exportVisitors));
// Output: Exported data: It is a Ford car.

console.log(bmw.accept(exportVisitors));
// Output: Exported data: It is a BMW car.
