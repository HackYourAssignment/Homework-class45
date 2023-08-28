'use strict';
function selectRandomly(values) {
const randomIndex=Math.floor(Math.random()* values.length);
return values[randomIndex];
}

function tellFortune(numKids,partnerName,location,jobTitle) {

return`You will be a ${selectRandomly(jobTitle)} in ${selectRandomly(location)} ,
    married to ${selectRandomly(partnerName)} with ${selectRandomly(numKids)} kids.`
}
function main() {
  const numKids = [1,"no",2,3,4];
  const partnerNames = [
  "Ella",
  "Jackson",
  "Isabella",
  "Elijah",
  "Mia"
];

  const locations = [
  "Belgium",
  "Germany",
  "France",
  "Luxembourg",
  "Denmark"
];

  const jobTitles = [
  "Teacher",
  "Data Scientist",
  "Product Manager",
  "Mechanical Engineer",
  "Chef"
];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
