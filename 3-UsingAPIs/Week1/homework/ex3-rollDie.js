'use strict';

function rollDie() {
  return new Promise((resolve, reject) => {
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);

    const rollOnce = (roll) => {
      if (roll > 6) {
        // Reject to notify that the die rolled off the table after 6 rolls
        reject(new Error('Oops... Die rolled off the table.'));
      } else {
        // Compute a random die value for the current roll
        const value = Math.floor(Math.random() * 6) + 1;
        console.log(`Die value is now: ${value}`);

        if (roll === randomRollsToDo) {
          // Resolve to communicate the final die value once finished rolling
          resolve(value);
        } else if (roll < randomRollsToDo) {
          // Schedule the next roll to do until no more rolls to do
          setTimeout(() => rollOnce(roll + 1), 500);
        }
      }
    };

    // Start the initial roll
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

// Q: Does the problem described above still occur? If not, what would be your explanation? Add your answer as a comment to be bottom of the file.
// A: In the current code, when the die rolls off the table (rolls are higher than 6), the `reject` function is called and the error message is logged. The remaining rolls do not continue. This is because the reject function is stopping further processing in case of an error, and only if there's no case scenario valid for an error, it proceeds to execute the code to obtain a value and resolve the promise.

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;
