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

  // Use .map() to create an array of promises for rolling each die
  const rollPromises = dice.map((dieNumber) => {
    return rollDie(dieNumber);
  });

  // Use Promise.all() to wait for all dice rolls to complete
  return Promise.all(rollPromises);
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

//You may also notice that, in the case of a rejected promise, dice that have not yet finished their roll continue to do so. Can you explain why? Please add your answer as a comment to the end of the exercise file.
/*
1.Asynchronous Nature: JavaScript, especially in the browser,
 is inherently asynchronous.
  When we initiate a promise (in this case, rolling a die),
   it runs independently in the background while the main program continues to execute.

   2.Event Loop: JavaScript uses an event loop to manage asynchronous operations. It continuously checks the message queue for tasks that need to be executed.
    When a promise is resolved or rejected, it adds a task to the queue to handle the appropriate callback (either `then` or `catch`) when the promise is settled.

    3.Non-Blocking: Promises are non-blocking, which means that the rejection of one promise doesn't block the execution of other promises. 
    If one promise is rejected, the event loop doesn't halt; it continues to execute other tasks, including subsequent promises.


    In the context of rolling dice in the exercise, if one die rolls off the table and its promise is rejected, it doesn't prevent the other dice from completing their rolls. The rejected promise is handled asynchronously, and the subsequent dice rolls continue to execute their promises and resolve as expected.

So, even if one die has a problem (rejects), the other dice that haven't encountered issues continue to roll, and their promises are resolved independently. This is a fundamental characteristic of asynchronous programming in JavaScript.
*/
