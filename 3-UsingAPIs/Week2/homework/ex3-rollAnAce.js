'use strict';
const rollDie = require('../../helpers/pokerDiceRoller');
async function rollDieUntil(wantedValue) {
  while (true) {
    const value = await rollDie();
    if (value === wantedValue) {
      return value;
    }
  }
}
async function main() {
  try {
    const results = await rollDieUntil('ACE');
    console.log('Resolved!', results);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDieUntil;
