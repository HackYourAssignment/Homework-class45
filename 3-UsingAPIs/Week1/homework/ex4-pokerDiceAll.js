const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];

  return Promise.all(
    dice.map((value) => {
      return rollDie(value);
    })
  );
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

/* When a promise is rejected, it doesn't stop the execution of other promises in a Promise.all.
 Even if it is rejected, still each promise's result is determined independently, and other promises continue to execute.
This allows to handle the rejects without stop the execution of the others*/
