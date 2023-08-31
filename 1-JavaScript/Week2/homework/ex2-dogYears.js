'use strict';
function calculateDogAge(puppyAge) {
  const ageInDogYear = puppyAge * 7;
  return`Your doggie is ${ageInDogYear} years old in dog years!`
}
function main() {
  console.log(calculateDogAge(1)); // -> "Your doggie is 7 years old in dog years!"
  console.log(calculateDogAge(4)); // -> "Your doggie is 28 years old in dog years!"
  console.log(calculateDogAge(5)); // -> "Your doggie is 35 years old in dog years!"
}
// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = calculateDogAge;
