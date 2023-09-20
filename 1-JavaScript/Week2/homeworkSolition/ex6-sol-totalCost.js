'use strict';
const cartForParty = {
  beers: 1.75,
  chips: 0.99,
  chikenwings: 2.433,
  water: 2,
  bread: 1.5,
};

function calculateTotalPrice(cart) {
  cart  = Object.values(cart)
  const totalCartPrice = cart.reduce((acc,val)=>{return acc + val},0).toFixed(2)

  return `Total: € ${totalCartPrice}`
}
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(calculateTotalPrice.length===1)
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const expected = "Total: € 8.67"
  const actual = calculateTotalPrice(cartForParty)
  console.assert(expected === actual)
  console.log(actual)

}

function test() {
  test1();
  test2();
}

test();
