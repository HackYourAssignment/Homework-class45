'use strict';

function rollDie() {
  return new Promise((resolve, reject) => {
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);
    function rollOnce(roll) {
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Die value is now: ${value}`);
      if (roll > 6) {
        reject(new Error('Oops... Die rolled off the table.'));
      }
      if (roll === randomRollsToDo) {
        resolve(value);
      }
      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
    }
    rollOnce(1);
  });
}
function main() {
  rollDie()
    .then((value) => {
      console.log(`Success! Die settled on ${value}.`);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;

// The first version of the code uses callbacks to get the job done,
// but callbacks don't have a way to handle errors like promises do.
// Even though it works as expected, it's not as efficient as promises. With promises,
// you can easily deal with errors using 'catch,' making your code more organized and
// easier to read.
