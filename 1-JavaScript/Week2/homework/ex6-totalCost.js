'use strict';
const cartForParty = {
beer : 1.8,
chips : 2.2,
cake : 1.2,
iceCream : 3.4,
juice : 0.99
};

function calculateTotalPrice(numericObj) {
let totalPrice = Object.values(numericObj).reduce((accumulator,currentValue)=>{return accumulator+currentValue},0);
return `total: € ${totalPrice.toFixed(2)}`;
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
const expected=1;
const actual=calculateTotalPrice.length;
console.assert(expected === actual);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
let expected= cartForParty['beer']+cartForParty['cake']+cartForParty['chips']+
cartForParty['iceCream']+cartForParty['juice'];
expected=`total: € ${expected.toFixed(2)}`;
const actual=calculateTotalPrice(cartForParty);
console.assert(expected === actual);
}

function test() {
  test1();
  test2();
}

test();
