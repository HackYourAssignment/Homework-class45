'use strict';

function createObservable() {
  const subscribers = [];
  return {
    subscribe: function (subscriber) {
      subscribers.push(subscriber);
    },
    notify: function (message) {
      for (const each of subscribers) {
        each(message);
      }
    },
  };
}

module.exports = createObservable;
