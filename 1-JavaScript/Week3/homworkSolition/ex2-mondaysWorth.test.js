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
function computeEarnings(mondayTasks,hourlyRate) {
  return `€${mondayTasks.map((task) =>  task.duration/60 * hourlyRate ).
  reduce((acc,val) =>  acc + val,0).toFixed(2)}`
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
    
  test("should work for array of objects",()=>{
    for(let report of mondayTasks){
      expect(report).toHaveProperty("duration")
    }
  })
  test("the duration proporty should be type of number",()=>{
    for(let report of mondayTasks){
      expect(typeof report.duration).toBe("number")
    }
  })
});