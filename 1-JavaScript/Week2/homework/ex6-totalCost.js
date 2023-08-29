'use strict';

const cartForParty = {
  beers: 3.0,
  chips: 1.5,
  cheese: 1.5,
  orangeJuice: 2.0,
  chiliSauce: 2.0,
};

function calculateTotalPrice(cart) {
  const cartPrices = Object.values(cart);
  let amount = 0;

  cartPrices.forEach((price) => {
    amount += price;
  });

  return `Total: €${amount}`;
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  const expected = 1;
  const actual = calculateTotalPrice.length;
  console.assert(expected === actual);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const expected = 'Total: €10';
  const actual = calculateTotalPrice(cartForParty);
  console.assert(expected === actual);
}

function test() {
  test1();
  test2();
}

test();
