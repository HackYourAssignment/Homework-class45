const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const results = [];

  return rollDie(1)
    .then((val) => {
      results.push(val);
      return rollDie(2);
    })
    .then((val) => {
      results.push(val);
      return rollDie(3);
    })
    .then((val) => {
      results.push(val);
      return rollDie(4);
    })
    .then((val) => {
      results.push(val);
      return rollDie(5);
    })
    .then((value) => {
      results.push(value);
      return results;
    });
}

function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;
