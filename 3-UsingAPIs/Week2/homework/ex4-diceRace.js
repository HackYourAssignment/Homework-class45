'use strict';

const rollDie = require('../../helpers/pokerDiceRoller');

async function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const promises = dice.map(() => rollDie());
  return Promise.race(promises);
}

async function main() {
  try {
    const result = await rollDice();
    console.log('Resolved', result);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

//ANSWER

//The reason why some dice continue rolling is that Promise.race()
//does not cancel the promises that did not resolve first;
// it simply resolves the main promise with the result of the first die that stops.
// The other dice will keep rolling until they complete their own processes, but they will not affect the resolved result.
