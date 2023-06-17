/**
 * Memento
 * The Memento design pattern is used to capture and restore an object's
 * internal state without violating encapsulation. It allows you to save and
 * retrieve the state of an object at a specific point in time.
 *
 * The Memento pattern provides a way to store and restore the state of an
 * object, allowing you to implement undo/redo functionality, history
 * management, or any situation where you need to capture and restore an
 * object's state.
 */

class Memento {
  constructor(value) {
    this.value = value;
  }
}

const creator = {
  save: (val) => new Memento(val),
  restore: (memento) => memento?.value,
};

class Caretaker {
  constructor() {
    this.value = [];
  }

  addMemento(memento) {
    this.value.push(memento);
  }

  getMemento(index) {
    return this.value[index];
  }
}

// Test
const careTaker = new Caretaker();

careTaker.addMemento(creator.save('text 1'));
careTaker.addMemento(creator.save('text 1 and text 2'));
careTaker.addMemento(creator.save('text 1 and text 2 and text 3'));

console.log(creator.restore(careTaker.getMemento(1)));
// Output: text 1 and text 2
