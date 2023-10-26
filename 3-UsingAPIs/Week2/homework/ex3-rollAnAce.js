'use strict';

const rollDie = require('../../helpers/pokerDiceRoller');

async function rollDieUntil() {
  while (true) {
    const value = await rollDie();
    if (value === 'ACE') {
      return value;
    } else if (value === 'The dice fell off the table') {
      throw new Error('Die rolled off the table');
    }
  }
}

async function main() {
  try {
    const result = await rollDieUntil('ACE');
    console.log(`Resolved! An ACE was thrown: ${result}`);
  } catch (error) {
    console.log(`Rejected! ${error.message}`);
  }
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDieUntil;
