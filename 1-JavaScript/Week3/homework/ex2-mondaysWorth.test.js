'use strict';
const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

const hourlyRate = 25;

function computeEarnings(tasks, hourlyRate) {
  if (
    !Array.isArray(tasks) ||
    tasks.every(
      (task) =>
        typeof task !== 'object' ||
        !('duration' in task) ||
        typeof task.duration !== 'number'
    )
  ) {
    return 'invalid input';
  } else {
    const billingSum = mondayTasks.reduce(
      (accumulator, task) => accumulator + (task.duration / 60) * hourlyRate,
      0
    );
    return `€${billingSum.toFixed(2)}`;
  }
}
// ! Unit tests (using Jest)
describe('computeEarnings', () => {
  test('should take two parameters', () => {
    expect(computeEarnings).toHaveLength(2);
  });

  test('should compute the earnings as a formatted Euro amount', () => {
    const result = computeEarnings(mondayTasks, hourlyRate);
    const expected = '€187.50';
    expect(result).toEqual(expected);
  });
  test('The input should be any array of objects that contain a duration property with a number value', () => {
    const result = computeEarnings([{ name: 'x', duration: '2' }]);
    const expected = 'invalid input';
    expect(result).toEqual(expected);
  });
});
