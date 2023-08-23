const feMale = prompt(
  "Partners Guess: \n  👧 enter: 'g'  \n   enter: 'any'   \n enter 'b'  👦. "
);

const numKids = ['only son', 2, 'twins', 3, 4];

const partnerNames = {
  f: ['Ka', 'Kyra', 'Kim', 'Kaat', 'Salma Hayek'],
  m: ['Kees', 'Ken', 'Koen', 'Kai', 'Kris'],
};

const partnerAny = partnerNames.m.concat(partnerNames.f);

const locations = ['Amsterdam', 'LA', 'London', 'Tokyo', 'Paris'];

const jobTitles = [
  'web developer',
  'IT Engineer',
  'Coder',
  'Programmer',
  'Software Developer',
];

function selectRandomly(takesArray) {
  const random = Math.floor(Math.random() * takesArray.length);
  return takesArray[random];
}

function partner(feMale, partnerNames) {
  if (feMale === 'b') {
    return selectRandomly(partnerNames.m);
  } else if (feMale === 'g') {
    return selectRandomly(partnerNames.f);
  } else if (feMale === 'any') {
    return selectRandomly(partnerAny);
  } else {
    return '🔣🔣-Partner: \n  Valid-Not 🥜';
  }
}

function tellFortune(numKids, partnerNames, locations, jobTitles) {
  const jobTitle = selectRandomly(jobTitles);
  const location = selectRandomly(locations);
  const partnerName = partner(feMale, partnerNames);
  const numKid = selectRandomly(numKids);

  return `You will be a ${jobTitle} in ${location}, married to ${partnerName} with ${numKid} kids.`;
}

function main() {
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}
main();
