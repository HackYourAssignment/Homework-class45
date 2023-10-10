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
