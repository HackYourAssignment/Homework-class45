'use strict';

function selectRandomly(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function tellFortune(
  numKidsArray,
  partnerNamesArray,
  locationsArray,
  jobTitlesArray
) {
  const jobTitles = selectRandomly(jobTitlesArray);
  const locations = selectRandomly(locationsArray);
  const partnerNames = selectRandomly(partnerNamesArray);
  const numKids = selectRandomly(numKidsArray);

  const fortune = `You will be a ${jobTitles} in ${locations}, married to ${partnerNames} with ${numKids} kids.`;

  return fortune;
}

function main() {
  const numKids = ['one', 'two', 'three', 'four', 'five'];

  const partnerNames = ['Emily', 'Olivia', 'Eve', 'Mia', 'liz'];

  const locations = [
    'United States',
    'Canada',
    'Australia',
    'Japan',
    'Colombia',
  ];

  const jobTitles = ['Engineer', 'Teacher', 'Doctor', 'Accountant', 'Musician'];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
