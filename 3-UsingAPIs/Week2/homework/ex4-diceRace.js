'use strict';
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const promises = dice.map(rollDie);
  return Promise.race(promises);
}
async function main() {
  try {
    const results = rollDice();
    console.log('Resolved!', results);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

//with using race we don't wait for the other promises to resolve.
