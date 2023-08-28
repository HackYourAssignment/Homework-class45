'use strict';
function giveCompliment(name) {
const compliments = [
  "wonderful",
  "impressive",
  "outstanding",
  "marvelous",
  "exceptional",
  "brilliant",
  "remarkable",
  "splendid",
  "extraordinary",
 "magnificent"];
const randomSelection= Math.floor(Math.random()*10);
const compliment=compliments[randomSelection];
return `You Are ${compliment}, ${name} !`
}

function main() {
  const myName = 'Sanaz';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Nelly';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = giveCompliment;
