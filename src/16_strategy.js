/**
 * Strategy
 * The Strategy design pattern allows you to define a family of algorithms,
 * encapsulate each one as a separate class, and make them interchangeable at
 * runtime. This pattern enables the client to choose the desired algorithm
 * dynamically without having to modify the client's code.
 */

function baseStrategy(amount) {
  return amount;
}

function premiumStrategy(amount) {
  return amount * 0.85;
}

function platinumStrategy(amount) {
  return amount * 0.65;
}

class AutoCart {
  constructor(discount) {
    this.discount = discount;
    this.amount = 0;
  }

  checkout() {
    return this.discount(this.amount);
  }

  setAmount(amount) {
    this.amount = amount;
  }
}

// Test
const baseCustomer = new AutoCart(baseStrategy);
const premiumCustomer = new AutoCart(premiumStrategy);
const platinumCustomer = new AutoCart(platinumStrategy);

baseCustomer.setAmount(50000);
console.log(baseCustomer.checkout()); // Output: 50000

premiumCustomer.setAmount(50000);
console.log(premiumCustomer.checkout()); // Output: 42500

platinumCustomer.setAmount(50000);
console.log(platinumCustomer.checkout()); // Output: 32500
