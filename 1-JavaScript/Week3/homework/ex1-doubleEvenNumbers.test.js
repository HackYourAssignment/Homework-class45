function doubleEvenNumbers(numbers) {
  const newNumbers = numbers.filter((number) => number % 2 === 0);
  const doubledEvenNumbers = newNumbers.map((number) => number * 2);

  return doubledEvenNumbers;
}

test('doubleEvenNumbers should take the even numbers and double them', () => {
  const actual = doubleEvenNumbers([1, 2, 3, 4]);
  const expected = [4, 8];
  expect(actual).toEqual(expected);
});
