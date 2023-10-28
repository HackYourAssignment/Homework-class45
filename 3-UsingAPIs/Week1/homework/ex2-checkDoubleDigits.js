'use strict';

function checkDoubleDigits(num) {
  return new Promise((resolve, reject) => {
    if (num >= 10 && num < 100) {
      resolve('This is a double digit number!');
    } else {
      reject(new Error(`Expected a double digit number but got ${num}`));
    }
  });
}

function main() {
  checkDoubleDigits(9)
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));

  checkDoubleDigits(10)
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));

  checkDoubleDigits(99)
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));

  checkDoubleDigits(100)
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = checkDoubleDigits;
