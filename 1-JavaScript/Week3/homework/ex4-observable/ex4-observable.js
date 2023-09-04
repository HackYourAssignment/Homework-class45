'use strict';

function createObservable() {
  const subscribers = [];
  return {
    subscribe: function (subscriber) {
      subscribers.push(subscriber);
    },
    notify: function (message) {
      for (const subscriber of subscribers) {
        subscriber(message);
      }
    },
  };
}

// ! Do not change or remove the code below
module.exports = createObservable;
