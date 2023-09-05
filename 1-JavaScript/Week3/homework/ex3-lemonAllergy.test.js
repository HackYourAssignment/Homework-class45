'use strict';
const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

// ! Function under test
function sanitizeFruitBasket(fruitsOfBasket , fruitsToRemove) {
const unwantedFruits = fruitsOfBasket.filter( fruit => fruit !==fruitsToRemove);
return unwantedFruits;
}
// ! Unit tests (using Jest)
describe('sanitizeFruitBasket', () => {
  test('should take two parameters', () => {
    const expected = 2;
    const result = sanitizeFruitBasket.length;
    expect(expected).toBe(result);
  });

  test('should not modify the original `fruitBasket` array', () => {
    const originalFruitBasketContents = [...fruitBasket];
    sanitizeFruitBasket(fruitBasket , 'lemon');  
    expect(originalFruitBasketContents).toStrictEqual(fruitBasket);
  });

  test('should return a new array that does not include the unwanted `lemon`', () => {
    const expected = [ 'banana' ,'watermelon' ];
    const result = sanitizeFruitBasket(['banana', 'lemon','watermelon' , 'lemon'], 'lemon');
    expect(expected).toEqual(result);
  });
});
