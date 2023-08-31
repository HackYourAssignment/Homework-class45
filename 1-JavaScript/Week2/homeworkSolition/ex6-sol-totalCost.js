'use strict';
const cartForParty = {
  beers: 1.75,
  chips: 0.99,
  chikenwings: 2.433,
  water: 2,
  bread: 1.5,
};

function calculateTotalPrice(price) {
  const sum = price.reduce((acc,val)=> acc+val)
  return `Total: € ${sum.toFixed(2)}`
}
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(calculateTotalPrice.length===1)
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const cart = []
  for(let item in cartForParty){
    cart.push(cartForParty[item])
  } 

  const total = calculateTotalPrice(cart)
  console.log(total)

}

function test() {
  test1();
  test2();
}

test();
