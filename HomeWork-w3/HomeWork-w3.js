//ex4-observable
function createObservable() {
  const subscribers = [];
  return {
    subscribe: function (subscriber) {
      subscribers.push(subscriber); // Push the subscriber function onto the subscribers array
    },
    notify: function (message) {
      for (const subscriber of subscribers) {
        subscriber(message); // Call each subscriber with the notification message
      }
    },
  };
}

// // Example usage:

// const observable = createObservable();

// const subscriber1 = (message) => {
//   console.log(`Subscriber 1 received message: ${message}`);
// };

// const subscriber2 = (message) => {
//   console.log(`Subscriber 2 received message: ${message}`);
// };

// observable.subscribe(subscriber1);
// observable.subscribe(subscriber2);

// observable.notify("Hello, subscribers!");

// ex1-doubleEvenNumbers
// function doubleEvenNumbers(numbers) {
//   return numbers
//     .filter((number) => number % 2 === 0)
//     .map((number) => number * 2);
// }
// Rest of the code remains the same...


// ex2-mondaysWorth
// function computeEarnings(tasks, hourlyRate) {
//   const totalMinutes = tasks
//     .map(task => task.duration)
//     .reduce((total, duration) => total + duration, 0);

//   const totalHours = totalMinutes / 60;
//   const earnings = totalHours * hourlyRate;
  
//   return `€${earnings.toFixed(2)}`;
// }

// ! Unit tests (using Jest)
// describe('computeEarnings', () => {
//   test('should take two parameters', () => {
//     // The `.length` property indicates the number of parameters expected by
//     // the function.
//     expect(computeEarnings).toHaveLength(2);
//   });

//   test('should compute the earnings as a formatted Euro amount', () => {
//     const result = computeEarnings(mondayTasks, hourlyRate);
//     const expected = '€187.50';
//     expect(result).toBe(expected);
//   });
// });



// ex3-lemonAllergy
// function sanitizeFruitBasket(fruitBasket, unwantedFruit) {
//   const sanitizedBasket = fruitBasket.filter(fruit => fruit !== unwantedFruit);
//   return sanitizedBasket;
// }

// ! Unit tests (using Jest)
// describe('sanitizeFruitBasket', () => {
//   test('should take two parameters', () => {
//     // The `.length` property indicates the number of parameters expected by
//     // the function.
//     expect(sanitizeFruitBasket).toHaveLength(2);
//   });

//   test('should not modify the original `fruitBasket` array', () => {
//     // Save the original contents of the fruit basket
//     const originalFruitBasketContents = [...fruitBasket];
//     // Call the function
//     sanitizeFruitBasket(fruitBasket, 'lemon');
//     // Check if the original array is unchanged
//     expect(fruitBasket).toEqual(originalFruitBasketContents);
//   });

//   test('should return a new array that does not include the unwanted `lemon`', () => {
//     const result = sanitizeFruitBasket(fruitBasket, 'lemon');
//     const expected = ['apple', 'grapefruit', 'banana', 'watermelon'];
//     expect(result).toEqual(expected);
//   });
// });



// ex5-wallet
// const quiz = {
//   q1: {
//     question: 'At line 26, which variables are in the scope marked Closure?',
//     choices: { 
//       a: 'There is no scope marked Closure', 
//       b: 'cash, name', 
//       c: 'amount, this, wallet'
//     },
//     answer: b,
//   },
//   q2: {
//     question: 'What is in the Call Stack, from top to bottom?',
//     choices: { 
//       a: 'withdraw, anonymous', 
//       b: 'anonymous, transferInto', 
//       c: 'transferInto, anonymous' 
//     },
//     answer: a,
//   },
//   q3: {
//     question: 'What tooltip appears when hovering over the third debug button?',
//     choices: { 
//       a: 'Step into next function call', 
//       b: 'Step out of current function', 
//       c: 'Step' 
//     },
//     answer: a,
//   },
//   q4: {
//     question: 'What is displayed in the console?',
//     choices: { 
//       a: 'Transferring € 50,00 from Jack to Joe', 
//       b: 'Transferring € 50,00 from Jack to undefined', 
//       c: 'Transferring € 50,00 from Jack to Jane' 
//     },
//     answer: b,
//   },
//   q5: {
//     question: 'The owner of the wallet with insufficient funds is:',
//     choices: { 
//       a: 'Jack', 
//       b: 'Joe', 
//       c: 'Jane' 
//     },
//     answer: a,
//   },
// };