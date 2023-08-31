"use strict";

function calculateDogAge(years) {
  const dogYears = 7
  let calculatedDogYears = years * dogYears;
  return `Your doggie is ${calculatedDogYears} years old in dog years!`;

}

function main() {
  console.log(calculateDogAge(1));
  console.log(calculateDogAge(2));
  console.log(calculateDogAge(3));
}

if (process.env.NODE_ENV !== "test") {
  main();
}
module.exports = calculateDogAge;