'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-4-dice-race

1. Complete the function `rollDice()` by using `.map()` on the `dice` array 
   to create an array of promises for use with `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dice continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];

  return Promise.race(
    dice.map((item) => {
      return rollDie(item);
    })
  );
}

async function main() {
  try {
    const results = rollDice();
    console.log('Resolved!', results);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

/*
3. With Promise.race(), we wait for any promise to be resolved and return the result of it. So we don't wait for the others.
 I think other promises probably continue to work and keep rolling.
*/
