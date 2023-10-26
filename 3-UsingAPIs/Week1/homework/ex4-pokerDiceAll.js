const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
 
  const dice = [1, 2, 3, 4, 5];

  const promises = dice.map((dieNumber) => rollDie(dieNumber));

  return Promise.all(promises);
}

function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

// ANSWER:
// The fact that one of the promises is rejected does not affect the operation of the others
// because each promise operates independently,
// unlike callback functions, which run in a chained manner.