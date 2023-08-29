"use strict";


function calculateDogAge(years) {
  let dogYears = years * 7;
  let telldogYears = `your dog is ${dogYears} years old in dog years!`;
  return telldogYears;
}

function main() {
  console.log(calculateDogAge(1));
  console.log(calculateDogAge(2));
  console.log(calculateDogAge(3));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== "test") {
  main();
}
module.exports = calculateDogAge;