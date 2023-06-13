/**
 * Adapter pattern
 * The Adapter pattern is a structural design pattern that allows incompatible
 * interfaces of classes to work together by converting the interface of one
 * class into another interface that the client expects. It acts as a bridge
 * between two incompatible interfaces, allowing them to collaborate without
 * modifying their existing code.
 */

class StandardEngine {
  standardInterface() {
    console.log('Standard engine');
  }
}

class SportEngine {
  sportInterface() {
    console.log('Sport engine');
  }
}

// Adapter
class SportEngineAdapter {
  constructor(engine) {
    this.engine = engine;
  }

  standardInterface() {
    this.engine.sportInterface();
  }
}

// Test
class Auto {
  startEngine(engine) {
    engine.standardInterface();
  }
}

// standardEngine
const myCar1 = new Auto();
const standardEngine = new StandardEngine();

console.log(myCar1.startEngine(standardEngine)); // Output: Standard engine

// sport engine with adapter
const myCar2 = new Auto();
const engineAdapter = new SportEngineAdapter(new SportEngine());

console.log(myCar2.startEngine(engineAdapter)); // Output: Sport engine

// sport engine
const myCar3 = new Auto();
const sportEngine = new SportEngine();

// console.log(myCar3.startEngine(sportEngine));
// Output: ERROR
