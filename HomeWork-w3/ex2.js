function computeEarnings(tasks, hourlyRate) {
  const totalMinutes = tasks
    .map(task => task.duration)
    .reduce((total, duration) => total + duration, 0);

  const totalHours = totalMinutes / 60;
  const earnings = totalHours * hourlyRate;
  
  return `€${earnings.toFixed(2)}`;
}

//! Unit tests (using Jest)
describe('computeEarnings', () => {
  test('should take two parameters', () => {
    // The `.length` property indicates the number of parameters expected by
    // the function.
    expect(computeEarnings).toHaveLength(2);
  });

  test('should compute the earnings as a formatted Euro amount', () => {
    const result = computeEarnings(mondayTasks, hourlyRate);
    const expected = '€187.50';
    expect(result).toBe(expected);
  });
});