'use strict';

function giveCompliment(name) {
  const compliments = ["great", "awesome", "fantastic", "terrific", "fabulous", "splendid", "wonderful", "magnificent", "outstanding", "excellent"];
  const randomCompliment = compliments[Math.floor(Math.random()*10)];
  return `You are ${randomCompliment}, ${name}!`;
}

function main() {
  const myName = 'Kadir';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Amsterdam';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = giveCompliment;
