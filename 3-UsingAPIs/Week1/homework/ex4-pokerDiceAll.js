// The line below makes the rollDie() function available to this file.
// Do not change or remove it.
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const promises = dice.map((die) => rollDie(die));
  return Promise.all(promises);
}

function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

// Q: You may also notice that, in the case of a rejected promise, dice that have not yet finished their roll continue to do so. Can you explain why?
// A: As I understand it, every roll of the die happens as an asynchronous task, so that even if one of the dice rolls doesn't work out and results in a rejected promise, it doesn't affect the other dice.

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;
