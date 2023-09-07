
// ! Function to be tested
function doubleEvenNumbers(numbers) {
  // TODO rewrite the function body using `map` and `filter`.
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
  
}
function doubleEvenNumbers(numbers) {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  const doubledNumbers = evenNumbers.map((number) => number * 2);
  return doubledNumbers;
}

// ! Unit test (using Jest)
test('doubleEvenNumbers should take the even numbers and double them', () => {
  const actual = doubleEvenNumbers([1, 2, 3, 4]);
  const expected = [4, 8];
  expect(actual).toEqual(expected);
});