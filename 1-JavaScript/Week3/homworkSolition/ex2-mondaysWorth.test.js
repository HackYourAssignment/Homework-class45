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
  const newmondayTasks = [...mondayTasks]
  const totEarn = newmondayTasks.map((task) => { return task.duration/60 * 25 }).
  reduce((acc,val) => {return acc + val},0).toFixed(2)
  const totEarnS = `€${totEarn}`
  return totEarnS

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
    for(let x of mondayTasks){
      expect(x).toHaveProperty("duration")
    }
  })
  test("the duration proporty should be type of number",()=>{
    for(let x of mondayTasks){
      expect(typeof x.duration).toBe("number")
    }
  })
});
