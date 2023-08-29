'use strict';

function getRandomCompliments(compliments) {
  return compliments[Math.floor(Math.random() * compliments.length)];
}

const compliments = [
  'amazing',
  'awesome',
  'fantastic',
  'terrific',
  'excellent',
  'outstanding',
  'wonderful',
  'admirable',
  'splendid',
  'phenomenal',
];

function giveCompliment(name) {
  const randomCompliments = getRandomCompliments(compliments);
  return `You are ${randomCompliments}, ${name}!`;
}

function main() {
  const myName = 'HackYourFuture';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Lenin del Rio';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = giveCompliment;
