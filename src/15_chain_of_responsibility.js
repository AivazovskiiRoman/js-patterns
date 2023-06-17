/**
 * Chain of Responsibility
 * The Chain of Responsibility design pattern allows multiple objects to have a
 * chance to handle a request in a sequential manner. Each object in the chain
 * has the option to handle the request or pass it to the next object in the
 * chain.
 */

class Account {
  pay(orderPrice) {
    if (this.canPay(orderPrice)) {
      console.log(`Paid ${orderPrice} using ${this.name}`);
    } else if (this.incomer) {
      console.log(`Can not pay using ${this.name}`);
      this.incomer.pay(orderPrice);
    } else {
      console.log(`You don't have enough money on your account`);
    }
  }

  canPay(amount) {
    return this.balance >= amount;
  }

  setNext(account) {
    this.incomer = account;
  }

  show() {
    console.log(this);
  }
}

class Master extends Account {
  constructor(balance) {
    super();
    this.name = 'Master Card';
    this.balance = balance;
  }
}

class Paypal extends Account {
  constructor(balance) {
    super();
    this.name = 'Paypal';
    this.balance = balance;
  }
}

class Qiwi extends Account {
  constructor(balance) {
    super();
    this.name = 'Qiwi';
    this.balance = balance;
  }
}

// Test
const master = new Master(100);
const paypal = new Paypal(200);
const qiwi = new Qiwi(500);

master.setNext(paypal);
paypal.setNext(qiwi);

// Start payment
master.pay(450);
// Output:
// Can not pay using Master Card
// Can not pay using Paypal
// Paid 450 using Qiwi

master.pay(550);
// Output:
// Can not pay using Master Card
// Can not pay using Paypal
// You don't have enough money on your account

master.show();
