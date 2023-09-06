'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  beers: 1.75,
  chips: 0.99,
  colaJW: 2.79,
  energyDrink: 1.59,
  crisps: 1.99,
};

/* 
// function calculateTotalPrice(object) {
//   let amount = 0;
//   for (const key of object) {
//     amount += object[key];
//   }
//   return `Total: €${amount}`;
// }
// console.log(calculateTotalPrice(cartForParty));
*/
/*
// function calculateTotalPrice(object) {
//   let amount = 0;
//   object.forEach((key) => {
//     amount += object[key];
//   });
//   return `Total: €${amount}`;
// }
// console.log(calculateTotalPrice(cartForParty));
*/

/* * 
 * * * Avoid 'for in ' loops. Prefer Object.keys(' instead. eslint (no-restricted-syntax) [Ln 32, Col 3]
function calculateTotalPrice(object) {
  let amount = 0;
  for (const key in object) {
    amount += object[key];
  }

  return `Total: €${amount}`;
}

console.log(calculateTotalPrice(cartForParty));
 */

function calculateTotalPrice(object) {
  let amount = 0;
  const keys = Object.keys(object);

  for (const key of keys) {
    amount += object[key];
  }

  return `Total: €${amount.toFixed(2)}`;
}

console.log(calculateTotalPrice(cartForParty));

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(calculateTotalPrice.length === 1); // just copy mimicking ex.5_test
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  console.assert(calculateTotalPrice(cartForParty) === 'Total: €9.11');
}

function test() {
  test1();
  test2();
}

test();
