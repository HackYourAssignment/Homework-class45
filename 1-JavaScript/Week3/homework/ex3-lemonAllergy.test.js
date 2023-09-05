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
function sanitizeFruitBasket(fruitBasket, fruitToRemove) {
  const sanitizedFruitBasket = fruitBasket.filter((fruit) =>
  fruit !== fruitToRemove);

  return sanitizedFruitBasket;
}

// ! Unit tests (using Jest)
describe('sanitizeFruitBasket', () => {
  test('should take two parameters', () => {
    expect(sanitizeFruitBasket).toHaveLength(2);
  });

  test('should not modify the original `fruitBasket` array', () => {
    const originalFruitBasketContents = [...fruitBasket];
    expect(fruitBasket).toEqual(originalFruitBasketContents);
  });

  test('should return a new array that does not include the unwanted `lemon`', () => {
    const result = sanitizeFruitBasket(fruitBasket, 'lemon');
    const expected = [
      'apple',
      'grapefruit',
      'banana',
      'watermelon'
    ];
    expect(result).toEqual(expected);
  });
});
