/**
 * Flyweight
 * The Flyweight design pattern is a structural design pattern that focuses on
 * efficient memory usage by sharing common object data among multiple similar
 * objects. It is used when there is a large number of similar objects that can
 * be made more memory-efficient by sharing common state.
 *
 * The main idea behind the Flyweight pattern is to separate the intrinsic
 * state (shared state) and extrinsic state (unique state) of objects. The
 * intrinsic state is stored in shared flyweight objects, while the extrinsic
 * state is passed in from the client code when needed.
 */

class Auto {
  constructor(model) {
    this.model = model;
  }
}

class AutoFactory {
  constructor(name) {
    this.models = {};
  }

  create(name) {
    let model = this.models[name];

    if (model) {
      return model;
    }

    console.count('model');

    this.models[name] = new Auto(name);

    return this.models[name];
  }

  getModels() {
    console.table(this.models);
  }
}

// Test
const factory = new AutoFactory();

const bmw = factory.create('BMW');
const audi = factory.create('Audi');
const tesla_black = factory.create('Tesla');
const tesla_white = factory.create('Tesla');

console.log(factory.getModels());

/*
  Output:
  {BMW: Auto, Audi: Auto, Tesla: Auto}
  ┌─────────┬─────────┐
  │ (index) │  model  │
  ├─────────┼─────────┤
  │  BMW    │ 'BMW'   │
  │  Audi   │ 'Audi'  │
  │  Tesla  │ 'Tesla' │
  └─────────┴─────────┘
*/
