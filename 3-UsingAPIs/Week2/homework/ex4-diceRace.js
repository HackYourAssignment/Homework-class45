'use strict';

// ! Do not remove this line
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
 const promises = dice.map((diceNum)=>{
   return rollDie(diceNum);
  });
 return Promise.race(promises);
}

async function main() {
  try{
    const result = await rollDice();
    console.log('Resolved!', result);
  }
  catch(error) {
    console.log('Rejected!', error.message);
  }
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;


//After the first die reaches the desired result, 
//the other dice continue rolling until they complete their rolls.
// In other words, they don't instantly stop when one of them achieves the outcome we were looking for.