const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const results = [];
  let dieNumber = 1;

  function rollNextDie() {
    if (dieNumber <= 5) {
      return rollDie(dieNumber).then((value) => {
        results.push(value);
        dieNumber++;
        return rollNextDie();
      });
    } else {
      return Promise.resolve(results);
    }
  }
  return rollNextDie();
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
