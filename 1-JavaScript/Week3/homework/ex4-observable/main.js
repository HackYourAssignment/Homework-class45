const createObservable = require('./ex4-observable');

function consoleUpperCase(message) {
  console.log(message.toUpperCase());
}

function consoleLowerCase(message) {
  console.log(message.toLowerCase());
}

const observable = createObservable();

observable.subscribe(console.log);
observable.subscribe(consoleUpperCase);
observable.subscribe(consoleLowerCase);

observable.notify("Let's see what happens here!");
console.log(observable);
consoleUpperCase(observable);
consoleLowerCase(observable);
