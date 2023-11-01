'use strict';

// ! Do not change or remove the next two lines
const rollDie = require('../../helpers/pokerDiceRoller');

async function rollDieUntil(wantedValue) {
  let keepDieRolling = true;
  while (keepDieRolling) {
    const value = await rollDie();
    if (value === wantedValue) {
      keepDieRolling = false;
      return value;
    }
  }
}

async function main() {
  try {
    const result = await rollDieUntil('ACE');
    console.log('Resolved!', result);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDieUntil;
