'use strict';

function rollDie(callback) {
  return new Promise((resolve, reject) => {
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);

    const rollOnce = (roll) => {
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Die value is now: ${value}`);

      if (roll > 6) {
        reject(new Error(`Oops... Die Rolled off the table.`));
      }

      if (roll === randomRollsToDo) {
        resolve(value);
      }

      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
    };


  // Start the initial roll
  rollOnce(1);
});
}

function main() {
  rollDie()
    .then((value) => {
      console.log(`Success! Die settled on ${value}.`);
    })
   .catch((error) => {
    console.log(error.message);
  });
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;


//ANSWER:

//Now, the issue of predictability in the callback version no longer persists.
// Since all promises are launched simultaneously, they can finish at different times, 
//making the behavior of the die feel more random./