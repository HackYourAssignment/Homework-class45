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

  const generalInfo =[]
  for(let records of empRecords){
    // console.log(records)
    // destructering and pushing each of proporty
    const {name,occupation,gender,salary,email}=records
    generalInfo.push({name,occupation,email})
  }
  // console.log("Result is",generalInfo)
  return generalInfo

}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log("=====================")
  console.log('Test 1: filterPrivateData should take one parameters');
  console.assert(filterPrivateData.length === 1);
}

function test2() {
  console.log("=====================")
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
