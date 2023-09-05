'use strict';

const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30,
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

function computeEarnings(tasksArray, hourlyRate) {
  const hourTask = tasksArray
    .map((el) => el.duration)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return `€${((hourTask / 60) * hourlyRate).toFixed(2)}`;
}

describe('computeEarnings', () => {
  test('should take two parameters', () => {
    expect(computeEarnings).toHaveLength(2);
  });

  test('should compute the earnings as a formatted Euro amount', () => {
    const result = computeEarnings(mondayTasks, hourlyRate);
    const expected = '€187.50';
    expect(result).toBe(expected);
  });
});
