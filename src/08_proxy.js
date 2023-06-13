/**
 * Proxy pattern
 * The Proxy pattern is a structural design pattern that provides a surrogate
 * or placeholder object to control access to another object, called the real
 * subject. The proxy acts as an intermediary between the client and the real
 * subject, allowing additional functionality to be added before or after
 * accessing the real subject.
 */

class CarAccess {
  open() {
    console.log('Opening a car door');
  }

  close() {
    console.log('Closing a car door');
  }
}

class SecuritySystem {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log('Access denied!');
    }
  }

  close() {
    this.door.close();
  }

  authenticate(password) {
    return password === 'BMW';
  }
}

// Test
const door = new SecuritySystem(new CarAccess());

door.open(); // Output: Access denied!
door.open('Boo'); // Output: Access denied!
door.open('BMW'); // Output: Opening a car door
door.close(); // Output: Closing a car door
