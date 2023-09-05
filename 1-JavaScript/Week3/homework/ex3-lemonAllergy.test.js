'use strict';

const { ac } = require('html-validate/dist/cjs/core');

const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

function sanitizeFruitBasket(fruitBasket, fruitToRemove) {
  return fruitBasket.filter((fruit) => fruit !== fruitToRemove);
}

describe('sanitizeFruitBasket', () => {
  test('should take two parameters', () => {
    // TODO replace next line with your code
    expect(sanitizeFruitBasket).toHaveLength(2);
  });

  test('should not modify the original `fruitBasket` array', () => {
    const originalFruitBasketContents = [...fruitBasket];

    const actualResult = sanitizeFruitBasket(
      originalFruitBasketContents,
      'lemon'
    );

    expect(actualResult).not.toBe(originalFruitBasketContents);
  });

  test('should return a new array that does not include the unwanted `lemon`', () => {
    const originalFruitBasketContents = [...fruitBasket];
    const expectedResult = ['apple', 'grapefruit', 'banana', 'watermelon'];
    const actualResult = sanitizeFruitBasket(
      originalFruitBasketContents,
      'lemon'
    );
    expect(actualResult).not.toContain('lemon');
    expect(actualResult).toEqual(expectedResult);
  });
});
