/**
 * Iterator
 * The Iterator design pattern allows us to go through a collection of items
 * one by one without needing to know the details of how the collection is
 * structured. It provides a way to access the elements of an object
 * sequentially without exposing its internal structure.
 */

class Iterator {
  constructor(el) {
    this.index = 0;
    this.elements = el;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

// Test

const collection = new Iterator(['Audi', 'BMW', 'Mercedes', 'Bentley']);

while (collection.hasNext()) {
  console.log(collection.next());
}

/* 
  Output: 
    Audi
    BMW
    Mercedes
    Bentley
*/

// The second example

class IteratorForObject {
  constructor(el) {
    this.index = 0;
    this.keys = Object.keys(el);
    this.elements = el;
  }

  next() {
    return this.elements[this.keys[this.index++]];
  }

  hasNext() {
    return this.index < this.keys.length;
  }
}

// Test
const autos = {
  audi: { model: 'Audi', color: 'White', price: 90000 },
  bmw: { model: 'BMW', color: 'White', price: 110000 },
  mercedes: { model: 'Mercedes', color: 'Black', price: 98000 },
  bentley: { model: 'Bentley', color: 'Pink', price: 300000 },
};

const collectionObj = new IteratorForObject(autos);

while (collectionObj.hasNext()) {
  console.log(collectionObj.next());
}

// Output:
// {model: 'Audi', color: 'White', price: 90000}
// {model: 'BMW', color: 'White', price: 110000}
// {model: 'Mercedes', color: 'Black', price: 98000}
// {model: 'Bentley', color: 'Pink', price: 300000}
