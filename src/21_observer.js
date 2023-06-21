/**
 * Observer
 * The Observer design pattern is a behavioral pattern that establishes a
 * one-to-many dependency between objects. In this pattern, there is a subject
 * (also known as the observable) that maintains a list of observers. The
 * subject allows observers to subscribe or unsubscribe dynamically. Whenever
 * the state of the subject changes, it automatically notifies all its
 * subscribed observers, and they can react and update themselves accordingly.
 */

class AutoNews {
  constructor() {
    this.news = '';
    this.observers = [];
  }

  setNews(text) {
    this.news = text;
    this.notifyAll();
  }

  notifyAll() {
    return this.observers.forEach((observer) => observer.inform(this.news));
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
}

class Roman {
  inform(news) {
    console.log(`Roman has been informed about: ${news}`);
  }
}

class Max {
  inform(news) {
    console.log(`Max has been informed about: ${news}`);
  }
}

// Test
const autoNews = new AutoNews();

autoNews.subscribe(new Roman());
autoNews.subscribe(new Max());

autoNews.setNews('New Tesla price is $31000');
// Output:
// Roman has been informed about: New Tesla price is $31000
// Max has been informed about: New Tesla price is $31000
