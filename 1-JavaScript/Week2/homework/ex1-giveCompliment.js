'use strict';

function giveCompliment(name) {
  const compliments = [
    'amazing',
    'marvelous',
    'great',
    'outstanding',
    'incredible',
    'brilliant',
    'remarkable',
    'excellent',
    'splendid',
    'admirable',
  ];

  const compliment =
    compliments[Math.floor(Math.random() * compliments.length)];

  return `You are ${compliment}, ${name}!`;
}

function main() {
  const myName = 'HackYourFuture';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Liz';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = giveCompliment;
