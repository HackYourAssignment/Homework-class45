'use strict';

function selectRandomly(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function tellFortune(numKids, partnerNames, locations, jobTitles) {
  const kids = selectRandomly(numKids);
  const partner = selectRandomly(partnerNames);
  const location = selectRandomly(locations);
  const job = selectRandomly(jobTitles);

  return `You will be a ${job} in ${location}, married to ${partner} with ${kids} kids.`;
}

function main() {
  const numKids = [2, 0, 3, 1, 4];
  const partnerNames = ['Alice', 'Bob', 'Eve', 'David', 'Linda'];
  const locations = ['New York', 'Los Angeles', 'London', 'Tokyo', 'Sydney'];
  const jobTitles = ['Engineer', 'Teacher', 'Doctor', 'Artist', 'Chef'];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
