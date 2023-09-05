"use strict";

function giveCompliment(name) {
  let compliments = [
    "bravo",
    "great",
    "nice",
    "excellent",
    "amazing",
    "better",
    "wonderful",
    "verygood",
    "Super",
    "fantastoc",
  ];
  let randomCompliment = Math.floor(Math.random() * compliments.length);
  return  `You are ${compliments[randomCompliment]} ${name}!`;

}

function main() {


  const myName = "Robel";

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = "Amsterdam";

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}
if (process.env.NODE_ENV !== "test") {

  main();

}