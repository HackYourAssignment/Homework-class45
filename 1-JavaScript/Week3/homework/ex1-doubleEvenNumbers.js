/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week4#exercise-1-the-odd-ones-out

The `doubleEvenNumbers` function returns only the even numbers in the array 
passed as the `numbers` parameter and doubles them.

Let's rewrite it (or _refactor_ it, as experienced developers would call it):

- Using the `map` and `filter` functions, rewrite the function body of
`doubleEvenNumbers`.
------------------------------------------------------------------------------*/
// ! Function to be tested
// TODO rewrite the function body using `map` and `filter`.

/// const newNumbers = Array.filter((number) => number % 2 === 0); ///  const numbers = [];

/**
 (numbers) => {
   const newNumbers = numbers.filter((number) => number % 2 === 0);
   const doubleEvenNumbers = newNumbers.map((newNumber) => newNumber * 2);
   console.log(doubleEvenNumbers);
 };
 */

// or:
function doubleEvenNumbers(numbers) {
  const newNumbers = numbers
    .filter((number) => number % 2 === 0)
    .map((number) => number * 2);
  // //console.log(newNumbers);
  return newNumbers;
}

module.exports = doubleEvenNumbers;

// run test: `npx jest file.test.js`
