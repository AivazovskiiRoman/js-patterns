/**
 * Bridge design pattern
 * The Bridge design pattern is a structural design pattern that decouples an
 * abstraction from its implementation, allowing them to vary independently.
 * It is useful when there are multiple dimensions of variation in a system and
 * we want to avoid the exponential growth of subclasses that would result
 * from combining all possible variations.
 *
 * The code demonstrates the Bridge design pattern, which separates an
 * abstraction (the Model class) from its implementation (the Color class) so
 * that they can vary independently.
 */

class Model {
  constructor(color) {
    this.color = color;
  }
}

class Color {
  constructor(type) {
    this.type = type;
  }

  get() {
    return this.type;
  }
}

class BlackColor extends Color {
  constructor() {
    super('dark-black');
  }
}

class Audi extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `auto: Audi, color: ${this.color.get()}`;
  }
}

class BMW extends Model {
  constructor(color) {
    super(color);
  }
  paint() {
    return `auto: BMW, color: ${this.color.get()}`;
  }
}

// Test
const blackBMW = new BMW(new BlackColor());

console.log(blackBMW.paint()); // Output: auto: BMW, color: dark-black
