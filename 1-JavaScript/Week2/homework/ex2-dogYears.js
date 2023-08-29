'use strict';

function calculateDogAge(years) {
  const dogAgesInDogYears = years * 7;
  return `Your doggie is ${dogAgesInDogYears} years old in dog years!`;
}

function main() {
  console.log(calculateDogAge(1));
  console.log(calculateDogAge(2));
  console.log(calculateDogAge(3));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = calculateDogAge;
