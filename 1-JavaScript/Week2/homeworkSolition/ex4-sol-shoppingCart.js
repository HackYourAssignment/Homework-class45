'use strict';
const shoppingCart = ['bananas', 'milk'];

function addToShoppingCart(groceryItem) {
  let itembought 
if(shoppingCart.length<3 && groceryItem !== undefined){
  console.log(shoppingCart)
  shoppingCart.push(groceryItem)
  console.log(shoppingCart)
}
else if(shoppingCart.length >= 3 ){
console.log("first item will be deleted")
console.log(shoppingCart)
shoppingCart.shift()
console.log(shoppingCart)
shoppingCart.push(groceryItem)
console.log(shoppingCart)
 
}
if (shoppingCart.length <3){
  itembought =  `You bought ${shoppingCart[0]}, ${shoppingCart[1]}!`
}
else if(shoppingCart.length = 3){

  itembought =  `You bought ${shoppingCart[0]}, ${shoppingCart[1]}, ${shoppingCart[2]}!`
}
  return itembought

}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log("====================================================")
  console.log(
    'Test 1: addShoppingCart() called without an argument should leave the shopping cart unchanged'
  );
  const expected = 'You bought bananas, milk!';
  const actual = addToShoppingCart();
  console.log("actual is>" , actual)
  console.assert(actual === expected);
}

function test2() {
  console.log("====================================================")
  console.log('Test 2: addShoppingCart() should take one parameter');
  const expected = 1;
  const actual = addToShoppingCart.length;
  console.assert(actual === expected);
}

function test3() {
  console.log("====================================================")
  console.log('Test 3: `chocolate` should be added');
  const expected = 'You bought bananas, milk, chocolate!';
  const actual = addToShoppingCart('chocolate');
  console.assert(actual === expected);
}

function test4() {
  console.log("====================================================")
  console.log('Test 4: `waffles` should be added and `bananas` removed');
  const expected = 'You bought milk, chocolate, waffles!';
  const actual = addToShoppingCart('waffles');
  // console.log("the returned message is >", actual )
  console.assert(actual === expected,"Noooooooooo");
}

function test5() {
  console.log("====================================================")
  console.log('Test 5: `tea` should be added and `milk` removed');
  const expected = 'You bought chocolate, waffles, tea!';
  const actual = addToShoppingCart('tea');
  // console.log("the returned message is >", actual )
  console.assert(actual === expected);
}

function test() {
  test1();
  test2();
  test3();
  test4();
  test5();
}

test();
