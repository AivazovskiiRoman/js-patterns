/**
 * Template Method
 * The Template Method design pattern defines the skeleton of an algorithm in a
 * base class and allows subclasses to override certain steps of the algorithm
 * without changing its overall structure. In other words, it provides template
 * for implementing an algorithm, with some of the steps being customizable by
 * subclasses.
 */

class Builder {
  build() {
    this.addEngine();
    this.installChassis();
    this.addElectronic();
    this.collectAccessories();
  }
}

class MercedesBuilder extends Builder {
  addEngine() {
    console.log('Adding Electronic Engine');
  }

  installChassis() {
    console.log('Install Mercedes Chassis');
  }

  addElectronic() {
    console.log('Adding Special Electronic');
  }

  collectAccessories() {
    console.log('Collecting Accessories');
  }
}

class BmwBuilder extends Builder {
  addEngine() {
    console.log('Adding BMW Engine');
  }

  installChassis() {
    console.log('Install BMW Chassis');
  }

  addElectronic() {
    console.log('Adding Electronic');
  }

  collectAccessories() {
    console.log('Collecting Accessories');
  }
}

// Test
const mercedesBuilder = new MercedesBuilder();
const bmwBuilder = new BmwBuilder();

mercedesBuilder.build();
// Output:
// Adding Electronic Engine
// Install Mercedes Chassis
// Adding Special Electronic
// Collecting Accessories

bmwBuilder.build();
// Output:
// Adding BMW Engine
// Install BMW Chassis
// Adding Electronic
// Collecting Accessories
