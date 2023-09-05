function doubleEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0).map((num) => num * 2);
}

test('doubleEvenNumbers should take the even numbers and double them', () => {
  const actual = doubleEvenNumbers([1, 2, 3, 4]);
  const expected = [4, 8];
  expect(actual).toEqual(expected);
});

console.log(doubleEvenNumbers);
