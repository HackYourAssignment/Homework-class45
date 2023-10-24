'use strict';

// ! Do not remove this line
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];

  const promises = dice.map(rollDie);

  return Promise.race(promises);
}

async function main() {
  try {
    const value = await rollDice();
    console.log('Resolved!', value);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

//Promise.race() is different than Promise.all(); if one promise resolve or reject it finishes the operation. The fastest promise will run the race.
