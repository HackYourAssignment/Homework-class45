"use strict";

function giveCompliment(name) {
  // TODO complete this function
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
  //   it is only possible to return 2 or more values using array using [] or as object in {}
  //   return [compliments[randomCompliment], name];
  let displayComplimetn = `You are ${compliments[randomCompliment]} ${name} !`;
  return displayComplimetn;
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
// ! Do not change or remove the code below
if (process.env.NODE_ENV !== "test") {
  main();
}
// module.exports = giveCompliment;