// function sanitizeFruitBasket(fruitBasket, unwantedFruit) {
//   const sanitizedBasket = fruitBasket.filter(fruit => fruit !== unwantedFruit);
//   return sanitizedBasket;
// }

// ! Unit tests (using Jest)
// describe('sanitizeFruitBasket', () => {
//   test('should take two parameters', () => {
//     // The `.length` property indicates the number of parameters expected by
//     // the function.
//     expect(sanitizeFruitBasket).toHaveLength(2);
//   });

//   test('should not modify the original `fruitBasket` array', () => {
//     // Save the original contents of the fruit basket
//     const originalFruitBasketContents = [...fruitBasket];
//     // Call the function
//     sanitizeFruitBasket(fruitBasket, 'lemon');
//     // Check if the original array is unchanged
//     expect(fruitBasket).toEqual(originalFruitBasketContents);
//   });

//   test('should return a new array that does not include the unwanted `lemon`', () => {
//     const result = sanitizeFruitBasket(fruitBasket, 'lemon');
//     const expected = ['apple', 'grapefruit', 'banana', 'watermelon'];
//     expect(result).toEqual(expected);
//   });
// });