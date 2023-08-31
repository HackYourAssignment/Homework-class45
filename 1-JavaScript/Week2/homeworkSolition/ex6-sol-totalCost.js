'use strict';
const cartForParty = {
  beers: 1.75,
  chips: 0.99,
  chikenwings: 2.433,
  water: 2,
  bread: 1.5,
};

function calculateTotalPrice(price) {
  // TODO replace this comment with your code
  // let sum = 0
  // for(let x of price){
  //   sum = sum + x
  // }
  const initial = 0
  const sum = price.reduce((acc,val)=> acc+val+initial)
  return `Total: € ${sum.toFixed(2)}`
}
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(calculateTotalPrice.length===1)
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const prices = []
  for(let item in cartForParty){
prices.push(cartForParty[item])
  } 

  // const {beers,chips,chikenwings,water,bread} = cartForParty 
  // prices.push(beers,chips,chikenwings,water,bread)
  const total = calculateTotalPrice(prices)
  console.log(total)

}

function test() {
  test1();
  test2();
}

test();
