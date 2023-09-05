'use strict';

function createObservable() {
  const subscribers = [];
  return {
    subscribe: function (subscriber) {
      
      subscribers.push(subscriber)
      return subscribers
    },
    notify: function (message) {
    
      subscribers.forEach((subscriber) => {
        if (subscriber != undefined) {
          subscriber(message);
        }
      });
    },
  };
}

module.exports = createObservable;
