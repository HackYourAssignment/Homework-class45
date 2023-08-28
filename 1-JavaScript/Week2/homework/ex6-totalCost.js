'use strict';

const cartForParty = {
  beers: 1.75,
  chips: 0.99,
  soda: 1.25,
  snacks: 2.5,
  pizza: 8.99
};

function calculateTotalPrice(cart) {
  let total = 0;
  for(const item in cart){
    total+=cart[item];
  }

  return `Total: €${total}`;
}

function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(calculateTotalPrice.length===1);
  
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  console.assert(calculateTotalPrice(cartForParty).includes(15.48));
}

function test() {
  test1();
  test2();
}

test();
