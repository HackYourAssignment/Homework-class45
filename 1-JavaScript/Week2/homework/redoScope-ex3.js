const feMale = window.prompt(
  "Partners Guess: \n  👧 enter: 'g'  \n   enter: 'any'   \n enter 'b'  👦. "
);

const numKids = ["only son", 2, "twins", 3, 4];

const partnerNames = {
  f: ["Ka", "Kyra", "Kim", "Kaat", "Salma Hayek"],
  m: ["Kees", "Ken", "Koen", "Kai", "Kris"],
};

// ... The spread operator :
/* const numbers = [1, 2, 3];
const string = ['fruit', 'vegetable'];
const combined = [...numbers, ...string];
console.log(combined) // Will be [1, 2, 3, 'fruit', 'vegetable'] */ //HYF-book:

<<<<<<< HEAD
// //const partnerAny = partnerNames.m.concat(partnerNames.f);
const partnerAny = [...partnerNames.m, ...partnerNames.f];
=======
// //const partnerAny = partnerNames.m.concat(partnerNames.f);
const partnerAny = [...partnerNames.m, ...partnerNames.f];

const locations = ['Amsterdam', 'LA', 'London', 'Tokyo', 'Paris'];
>>>>>>> db2a6db47275596003f312e93405a412a2eb1940

const locations = ["Amsterdam", "LA", "London", "Tokyo", "Paris"];

const jobTitles = [
  "web developer",
  "IT Engineer",
  "Coder",
  "Programmer",
  "Software Developer",
];
// IN IN Arrow Function:
// //function selectRandomly(takesArray) {
//   //const random = Math.floor(Math.random() * takesArray.length);
//   //return takesArray[random];
// //}
const selectRandomly = (takesArray) => {
  const random = Math.floor(Math.random() * takesArray.length);
  takesArray[random];
};

// Destructure the partnerNames object:
function partner(feMale, partnerNames) {
<<<<<<< HEAD
  if (feMale === "b") {
    return selectRandomly(partnerNames.m);
  } else if (feMale === "g") {
    return selectRandomly(partnerNames.f);
  } else if (feMale === "any") {
=======
  const { m, f } = partnerNames; // Do this
  if (feMale === 'b') {
    return selectRandomly(m); // instead of: `partnerNames.m`
  } else if (feMale === 'g') {
    return selectRandomly(f);
  } else if (feMale === 'any') {
>>>>>>> db2a6db47275596003f312e93405a412a2eb1940
    return selectRandomly(partnerAny);
  } else {
    return "🔣🔣-Partner: \n  Valid-Not 🥜";
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
/*
ex1-giveCompliment.js   ex3-tellFortune.js      ex5-shoppingCartPure.js ex7-mindPrivacy.js
ex2-dogYears.js         ex4-shoppingCart.js     ex6-totalCost.js        redoScope-ex3.js
kumait@Kumaits-MBP homework % node redoScope-ex3.js
/Users/kumait/Documents/Homework-class45/1-JavaScript/Week2/homework/redoScope-ex3.js:1
const feMale = prompt(
               ^

ReferenceError: prompt is not defined
    at Object.<anonymous> (/Users/kumait/Documents/Homework-class45/1-JavaScript/Week2/homework/redoScope-ex3.js:1:16)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.17.1   */
