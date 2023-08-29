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
  aaa: 1.5,
  bbb: 2.5,
  ccc: 3.5,
  ddd: 4.5,
  eee: 5.5,
  // TODO complete this object
};

function calculateTotalPrice(obj/* TODO parameter(s) go here */) {
  let sum = 0;
  for (const item in cartForParty) {
    sum += cartForParty[item];
  };
  return `Total: €${sum}.`
  // TODO replace this comment with your code
};

// ! Test functions (plain vanilla JavaScript)
function test1(obj) {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  // TODO replace this comment with your code
}

function test2(obj) {
  console.log('\nTest 2: return correct output when passed cartForParty');
  // TODO replace this comment with your code
  let result = calculateTotalPrice(obj);
  console.log(result);
}

function test() {
  test1(cartForParty);
  test2(cartForParty);
}

test();