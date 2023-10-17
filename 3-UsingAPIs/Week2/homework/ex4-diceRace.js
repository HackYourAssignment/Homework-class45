'use strict';

// ! Do not remove this line
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const promises = dice.map(() => rollDie());

  return Promise.race(promises);
}

async function main() {
  try {
    const result = await rollDice();
    console.log('Resolved!', result);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

// Q: Once you got this working, you may observe that some dice continue rolling for some undetermined time after the promise returned by `Promise.race()` resolves. Do you know why? Add your answer as a comment to the bottom of the file.

// A: Promise.race() doesn't stop other promises once one resolves, allowing them to continue rolling. Asynchronous JavaScript allows parallel execution, so other dice rolls will proceed independently.
