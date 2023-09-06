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
  chips: 1.5,
  chocolate: 2.5,
  icetea: 3.5,
  tea: 4.5,
  bread: 5.5,
  // TODO complete this object
};

function calculateTotalPrice(carts /* TODO parameter(s) go here */) {
  let sum = 0;
  for (const item in carts) {
    sum += carts[item];
  }
  return `Total: €${sum}.`;
  // TODO replace this comment with your code
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(calculateTotalPrice.length === 1);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  // TODO replace this comment with your code
  let actualResult = calculateTotalPrice(cartForParty);
  let expectedResult = 'Total: €17.50';
  console.assert(actualResult === expectedResult);
}

function test() {
  test1(cartForParty);
  test2(cartForParty);
}

test();
