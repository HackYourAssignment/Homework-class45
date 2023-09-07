
function createObservable() {
  const subscribers = [];

  return {
    subscribe: function (subscriber) {
      // Push the subscriber function onto the subscribers array
      subscribers.push(subscriber);
    },
    notify: function (message) {
      // Iterate through subscribers and call each one with the message
      subscribers.forEach((subscriber) => subscriber(message));
    },
  };
}

// ! Do not change or remove the code below
module.exports = createObservable;

