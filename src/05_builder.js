/**
 * Builder
 * The code implements the Builder pattern using classes in JavaScript.
 * The Builder pattern is a creational design pattern that allows for the
 * step-by-step construction of complex objects.
 * It separates the construction of an object from its representation, enabling
 * the same construction process to create different representations.
 *
 * By using the Builder pattern, the code allows for flexible construction of
 * Car objects, providing the ability to add optional features and update
 * properties in a step-by-step manner. This pattern enhances readability and
 * maintainability, especially when dealing with complex objects with many
 * optional parameters.
 */

class Car {
  constructor() {
    this.autopilot = false;
    this.parktronic = false;
    this.signaling = false;
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  addAutopilot(autopilot) {
    this.car.autopilot = autopilot;
    return this;
  }

  addParktronic(parktronic) {
    this.car.parktronic = parktronic;
    return this;
  }

  addSignaling(signaling) {
    this.car.signaling = signaling;
    return this;
  }

  updateEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  build() {
    return this.car;
  }
}

const car1 = new CarBuilder().updateEngine('V8');

const car2 = new CarBuilder()
  .addAutopilot(true)
  .addParktronic(true)
  .addSignaling(true)
  .updateEngine('V12');

console.log(car1.build());
// Output:
// Car { autopilot: false, parktronic: false, signaling: false, engine: 'V8' }

console.log(car2.build());
// Output:
// Car { autopilot: true, parktronic: true, signaling: true, engine: 'V12' }
