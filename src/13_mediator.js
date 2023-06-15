/**
 * Mediator
 * The Mediator design pattern is a behavioral design pattern that promotes
 * loose coupling between objects by introducing a mediator object that
 * encapsulates the communication between them. It allows objects to
 * communicate with each other without having direct references to one another,
 * thereby reducing dependencies and making the system more maintainable and
 * flexible.
 */

class OfficialDealer {
  constructor() {
    this.customers = [];
  }

  orderAuto(customer, auto, info) {
    const name = customer.getName();

    console.log(`Order name: ${name}. Order auto is ${auto}`);
    console.log(`Additional info: ${info}`);
    this.addToCustomersList(name);
  }

  addToCustomersList(name) {
    this.customers.push(name);
  }

  getCustomerList() {
    return this.customers;
  }
}

class Client {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }

  getName() {
    return this.name;
  }

  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info);
  }
}

// Test

const mediator = new OfficialDealer();

const roman = new Client('Roman', mediator);
const natasha = new Client('Natasha', mediator);

roman.makeOrder('BMW X7', 'S class and M version');
natasha.makeOrder('BMW i4', 'M version');

console.log(mediator.getCustomerList()); // Output: ['Roman', 'Natasha']
