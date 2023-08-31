'use strict';
const employeeRecords = [
  {
    name: 'John',
    occupation: 'developer',
    gender: 'M',
    email: 'john.doe@somewhere.net',
    salary: 50000,
  },
  {
    name: 'Jane',
    occupation: 'manager',
    gender: 'F',
    email: 'jane.eyre@somewhere.net',
    salary: 60000,
  },
];

function filterPrivateData(empRecords) {
  // for(let records of empRecords){
  //   // destructering and pushing each of proporty
  //   const {name,occupation,email}=records
  //   generalInfo.push({name,occupation,email})
  // }
  const filtered = empRecords.map(({name,occupation,email})=>({name,occupation,email}))
  // const filtered = empRecords.map(({name,occupation,email})=>{name,occupation,email})
  // syntax of arrow is ()={somthing to return}.....but it only works when the return block in a bracket()....why is that
  return filtered
}
function test1() {
  console.log('Test 1: filterPrivateData should take one parameters');
  console.assert(filterPrivateData.length === 1);
}

function test2() {
  console.log('Test 2: gender and salary should be filtered out');
  const expected = [
    {
      name: 'John',
      occupation: 'developer',
      email: 'john.doe@somewhere.net',
    },
    {
      name: 'Jane',
      occupation: 'manager',
      email: 'jane.eyre@somewhere.net',
    },
  ];
  const result = filterPrivateData(employeeRecords);
  
  console.assert(JSON.stringify(result) === JSON.stringify(expected));
}

function test() {
  test1();
  test2();
}

test();