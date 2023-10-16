'use strict';

function rollDie() {
  return new Promise((resolve, reject) => {
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);

    const rollOnce = (roll) => {
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
    };

    rollOnce(1);
  });
}

function main() {
  rollDie()
    .then((value) => console.log(`Success! Die settled on ${value}.`))
    .catch((err) => {
      console.log(err);
    });
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;

/*
The first version of the code using callbacks to achieve the task. But callbacks doesn't have the reject like promises. Even if it works as expected
it is not as effective as the promises. Because we need to use another function to track the negative scenario. When we use promises we can easily track
it by using catch. It is much more structured and readable.
*/
