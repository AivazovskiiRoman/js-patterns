/**
 * Command
 * The Command design pattern is used to encapsulate a request as an object,
 * allowing you to parameterize clients with different requests, queue or log
 * requests, and support undoable operations.
 *
 * The Command pattern allows you to encapsulate requests as objects,
 * decoupling the requester (Driver) from the receiver (Engine) and allowing
 * you to parameterize and manipulate requests as first-class objects.
 */

class Driver {
  constructor(command) {
    this.command = command;
  }

  execute() {
    this.command.execute();
  }
}

class Engine {
  constructor() {
    this.state = false;
  }

  on() {
    this.state = true;
  }

  off() {
    this.state = false;
  }
}

class OnStartCommand {
  constructor(engine) {
    this.engine = engine;
  }

  execute() {
    this.engine.on();
  }
}

class OnStopCommand {
  constructor(engine) {
    this.engine = engine;
  }

  execute() {
    this.engine.off();
  }
}

// Test
// Check engine status
const engine = new Engine();

console.log(engine);
// Output: Engine {state: false}

// Start engine
const onStartCommand = new OnStartCommand(engine);
let driver = new Driver(onStartCommand);
driver.execute();

console.log(engine);
// Output: Engine {state: true}

const onStopCommand = new OnStopCommand(engine);
driver = new Driver(onStopCommand);
driver.execute();

console.log(engine);
// Output: Engine {state: false}
