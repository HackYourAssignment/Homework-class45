const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const results = [];
  let currentDie = 1;

  const pushThenRoll = (dice) => (value) => {
    results.push(value);
    currentDie = i;

    if (currentDie <= 5) {
      return rollDie(currentDie).then(pushThenRoll(currentDie));
    } else {
      return results;
    }
};

  return rollDie(1)
    .then(pushThenRoll(1));
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
