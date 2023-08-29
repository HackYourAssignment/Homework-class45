'use strict';

function selectRandomly(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function tellFortune(numKids, partnerNames, locations, jobTitles) {
  const jobTitle = selectRandomly(jobTitles);
  const location = selectRandomly(locations);
  const partnerName = selectRandomly(partnerNames);
  const yourNumKids = selectRandomly(numKids);

  return `You will be a ${jobTitle} in ${location}, married to ${partnerName} with ${yourNumKids} kids.`;
}

function main() {
  const numKids = ['no', 1, 2, 3, 5];

  const partnerNames = [
    'Jorge Luis Borges',
    'Virginia Woolf',
    'Mo Yan',
    'Maya Angelou',
    'Ruben Dario',
  ];

  const locations = [
    'Nicaragua',
    'Netherlands',
    'Italy',
    'United States of America',
    'Uruguay',
  ];

  const jobTitles = [
    'Software Engineer/Developer',
    'Environmental Scientist',
    'Scientific Illustrator',
    'Musician & Songwriter',
    'Film Director',
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
