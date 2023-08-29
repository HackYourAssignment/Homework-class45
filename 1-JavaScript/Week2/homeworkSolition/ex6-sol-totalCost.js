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
   const cartForParty ={

   }

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  beers  : 1.75,
  chips :  0.99,
  chikenwings :  2.4,
  water :  2,
  bread :  1.5,
};

function calculateTotalPrice(price) {
  // TODO replace this comment with your code
  let sum = 0
  for(let x of price){
    sum = sum + x
  }
  return sum
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(calculateTotalPrice.length===1)
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const prices = []
  for(let x in cartForParty){
prices.push(cartForParty[x])
  }
  console.log(prices)
  const total = calculateTotalPrice(prices)
  console.log("Toal is $",total)

}

function test() {
  test1();
  test2();
}

test();
