'use strict';

// ! Do not change or remove the next two lines
const rollDie = require('../../helpers/pokerDiceRoller');

async function rollDieUntil(wantedValue) {
  try {
    let value;
    do {
      value = await rollDie();
    } while (value !== wantedValue);
    return value;
  } catch (error) {
    throw new Error('Rejected!', error.message);
  }
}

function main() {
  try {
    const results = rollDieUntil('ACE');
    console.log('Resolved!', results);
  } catch (error) {
    throw new Error('Rejected!', error.message);
  }
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDieUntil;
