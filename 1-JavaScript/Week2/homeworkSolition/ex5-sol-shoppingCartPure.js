'use strict';
function addToShoppingCart( shoppingCart, groceryItem) {
  // const shoppingCart = [...shoppingCartNew]
 
  console.log("The lentgth of the array is=>", shoppingCart.length)
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
  // when it returns it aint updeting
  return shoppingCart
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('Test 1: addToShoppingCart should take two parameters');
  console.assert(addToShoppingCart.length === 2);
}

function test2() {
  console.log('Test 2: addToShoppingCart should be a pure function');
  const initialCart = ['bananas', 'milk'];
  const result1 = addToShoppingCart(initialCart, 'chocolate');
  const result2 = addToShoppingCart(initialCart, 'chocolater');
  console.assert(JSON.stringify(result1) === JSON.stringify(result2));
  console.assert(
    JSON.stringify(initialCart) === JSON.stringify(['bananas', 'milk'])
  );
}

function test3() {
  console.log('Test 3: `chocolate` should be added');
  const initialCart = ['bananas', 'milk'];
  const result = addToShoppingCart(initialCart, 'chocolate');
  console.assert(result.length === 3);
  console.assert(result.includes('chocolate'));
}

function test4() {
  console.log('Test 4: `waffles` should be added');
  const initialCart = ['bananas', 'milk', 'chocolate'];
  const result = addToShoppingCart(initialCart, 'waffles');
  console.assert(result.length === 3);
  console.assert(result.includes('waffles'));
}

function test() {
  test1();
  test2();
  test3();
  test4();
}

test();