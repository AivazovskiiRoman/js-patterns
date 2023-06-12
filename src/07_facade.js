/**
 * Facade pattern
 * The Facade pattern is a design pattern that provides a simplified interface
 * to a complex subsystem or set of classes. It encapsulates the complexities
 * of the subsystem and presents a unified interface that makes it easier to
 * use.
 */

class Conveyor {
  setBody() {
    console.log('Body set!');
  }

  getEngine() {
    console.log('Dismantle engine!');
  }

  setEngine() {
    console.log('Engine was installed!');
  }

  setInterior() {
    console.log('Exterior added!');
  }

  getInterior() {
    console.log('Update interior!');
  }

  setWheels() {
    console.log('Wheels added!');
  }

  setFrontGlass() {
    console.log('Front glass is set!');
  }

  paint() {
    console.log('Painted!');
  }
}

class ConveyorFacade {
  constructor(car) {
    this.car = car;
  }

  assembleCar() {
    this.car.setBody();
    this.car.setEngine();
    this.car.setInterior();
    this.car.getInterior();
    this.car.setWheels();
    this.car.setFrontGlass();
    this.car.paint();
  }

  changeEngine() {
    this.car.getEngine();
    this.car.setEngine();
  }

  changeInterior() {
    this.car.getInterior();
    this.car.setInterior();
  }
}

// Test

const conveyor = new ConveyorFacade(new Conveyor());

const car = conveyor.assembleCar();

/*
  Output:
  Body set!
  Engine was installed!
  Exterior added!
  Update interior!
  Wheels added!
  Front glass is set!
  Painted!
*/
