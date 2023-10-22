/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/3-UsingAPIs/Week1#exercise-4-throw-the-dice-for-a-poker-dice-game

For this exercise you should do the following:
  - Refactor the `rollDice()` function to throw five dice in one go, by 
    using `.map()` on the `dice` array to create an array of promises for use 
    with `Promise.all()`.
  - A successful (i.e. resolved) throw should output a message similar to: 
      Resolved! [ 'JACK', 'QUEEN', 'QUEEN', 'NINE', 'JACK' ]
  - An unsuccessful (i.e. rejected) throw should output a message similar to:
      Rejected! Die 3 rolled off the table.

The provided rollDie() function logs the value of a die as it rolls, 
time-stamped with the time of day (with millisecond accuracy) to the console. 
Once you have successfully completed this exercise you will notice that the 
intermediate messages are output in bursts of up to five at a time as the dice 
finish rolling asynchronously.

You may also notice that, in the case of a rejected promise, dice that have not
yet finished their roll continue to do so. 
Can you explain why? Please add your answer as a comment to the end of the 
exercise file.
------------------------------------------------------------------------------*/

// The line below makes the rollDie() function available to this file.
// Do not change or remove it.
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const diceArr = dice.map((num) => {
    return rollDie(num);
  });
  return Promise.all(diceArr);
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

/*In JavaScript, Promise.all() method does not cancel the execution of the other 
promises when one of them is rejected.

When you use Promise.all(), you're saying "wait for all these promises to resolve". 
If one of the dice rolls off the table (i.e. one of the promises is rejected), 
Promise.all() immediately rejects with the reason of the first promise that rejected. 
However, this does not stop the execution of the other promises. The other dice 
will continue to roll until they've completed their rolls, because their promises 
are already in execution and cannot be cancelled.

Once a promise is in execution, it cannot be stopped. This is why the dice continue 
to roll even after one of them has rolled off the table.*/
