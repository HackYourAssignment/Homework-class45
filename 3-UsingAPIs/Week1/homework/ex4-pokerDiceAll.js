const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const promises = dice.map(diceNum => {return new Promise((resolve, reject)=> {
    rollDie( diceNum).then((result)=> {
      resolve(result);
    })
    .catch((error)=> {
      reject(error);
    });
  }) });
  return Promise.all(promises);
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

//When a Promise is rejected, it doesn't stop other ongoing asynchronous
 //operations or Promises; they continue executing independently.