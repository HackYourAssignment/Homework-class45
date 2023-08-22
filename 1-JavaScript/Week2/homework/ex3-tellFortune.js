'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-3-be-your-own-fortune-teller

Why pay a fortune teller when you can just program your fortune yourself?

4. Call the function three times, passing the arrays as arguments. Use `
   console.log` to display the results.

Note: The DRY principle is put into practice here: instead of repeating the code to 
randomly select array elements four times inside the `tellFortune` function 
body, this code is now written once only in a separated function.
-----------------------------------------------------------------------------*/
function selectRandomly(takesArray) {
const random = Math.floor(Math.random() * takesArray.length);
return takesArray[random];
};

function tellFortune(numKids, partnerNames, locations, jobTitles) {

  const jobTitle = selectRandomly(jobTitles);
  const location = selectRandomly(locations);
  const partnerName = selectRandomly(partnerNames);
  const numKid = selectRandomly(numKids);
  
  return `You will be a ${jobTitle} in ${location}, married to ${partnerName} with ${numKid} kids.`;
}

function main() {
  const numKids = [
    'only son', 2, 'twins' , 3, 4
  ];
  const locations = [
    'Amsterdam', 'LA', 'London', 'Tokyo', 'Paris'
  ];
  const jobTitles = [
    'web developer', 'IT Engineer', 'Coder', 'Programmer', 'Software Developer'
  ];
  const partnerNames = {
    m: ['Kees','Ken', 'Koen', 'Kai', 'Kris' ],
    f: ['Ka', 'Kyra', 'Kim', 'Kaat', 'Salma Hayek'] 
 };
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
};
main();

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
