"use strict";


function selectRandomly(arr) {
  // TODO complete this function

  let randomGuess = arr[Math.floor(Math.random() * arr.length)];

  return randomGuess;
}

function tellFortune(numKids, partnerNames, locations, jobTitles) {
  // TODO complete this function
  let numKid = selectRandomly(numKids);
  let partnerName = selectRandomly(partnerNames);
  let location = selectRandomly(locations);
  let jobTitle = selectRandomly(jobTitles);

  let tellFortune = `you will be a ${jobTitle} in ${location} married to ${partnerName} with ${numKid}`;
  return tellFortune;
}

function main() {
  const numKids = [1, 2, 3, 4, 5];
  const partnerNames = ["Lisa", "Bruno", "David", "Anna", "Tina"];
  const locations = ["Amsterdam", "Lisbon", "Hawaii", "London", "Roma"];
  const jobTitles = [
    "Sofware Developer",
    "Receptionist",
    "AI Engineer",
    "Journalist",
    "Dentist",
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== "test") {
  main();
}
module.exports = tellFortune;