'use strict';
///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

// Overview of Closures in JavaScript

// securebooking is a function that demonstrates the use of closures.
// It maintains a private variable `passengerCount` that can only be modified by the inner function.
const securebooking = function () {
  let passengerCount = 0;

  // The returned function forms a closure that retains access to `passengerCount`.
  return function () {
    passengerCount++;
    console.log(`${passengerCount} total passengers`);
  };
};

// Create a new booking function by invoking `securebooking`.
const booker = securebooking();

// Each call to `booker` increments the `passengerCount` and logs the result.
booker(); // Output: 1 total passengers
booker(); // Output: 2 total passengers
booker(); // Output: 3 total passengers

// Example 1:

let f;

// Function `g` assigns a closure to `f` that captures and uses the variable `a`.
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

// Function `h` assigns a closure to `f` that captures and uses the variable `b`.
const h = function () {
  const b = 87;
  f = function () {
    console.log(b * 2);
  };
};

// Invoke `g` to set `f` to the closure created inside `g`.
g();
// Invoke `f` to see the effect of the closure from `g`.
f(); // Output: 46

// Invoke `h` to set `f` to the closure created inside `h`.
h();
// Invoke `f` to see the effect of the closure from `h`.
f(); // Output: 174

// Example 2:

// `boardPassengers` demonstrates how closures work with asynchronous code.
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  // The inner function forms a closure that captures `n` and `perGroup` and executes after `wait` seconds.
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// Closures have priority over global scope variables.
// Even though `perGroup` is declared globally, the closure uses the `perGroup` variable from `boardPassengers`.
const perGroup = 1000;
boardPassengers(100, 3); // Outputs: Will start boarding in 3 seconds, We are now boarding all 100 passengers, There are 3 groups, each with 33.333333333333336 passengers

// Summary:
// A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
// Closures are an important concept in JavaScript that allow functions to access variables from an enclosing scope or environment,
// even after that scope has exited.

// Key Points:
// - Closures are created whenever a function is created inside another function and the inner function references variables from the outer function.
// - Closures allow for data encapsulation and the creation of private variables.

// Syntax:
// Closures are typically created when an inner function is returned from an outer function,
// and the inner function retains access to the variables in the outer function's scope.

// Example:
// function outerFunction() {
//   var outerVariable = 'I am outside!';

//   function innerFunction() {
//     console.log(outerVariable);
//   }

//   return innerFunction;
// }

// var closure = outerFunction();
// closure(); // Output: I am outside!

// Analogy:
// Think of a closure as a backpack. When you define a function inside another function,
// it's like putting all the variables from the outer function into a backpack.
// When the inner function is carried outside, it still has access to everything in that backpack.

// Practical Examples:
// 1. Creating private variables:
// function createCounter() {
//   let count = 0;

//   return {
//     increment: function() {
//       count++;
//       return count;
//     },
//     decrement: function() {
//       count--;
//       return count;
//     },
//     getCount: function() {
//       return count;
//     }
//   };
// }

// const counter = createCounter();
// console.log(counter.increment()); // Output: 1
// console.log(counter.getCount()); // Output: 1
// console.log(counter.decrement()); // Output: 0

// 2. Functions with partially applied arguments (partial application):
// function multiply(x) {
//   return function(y) {
//     return x * y;
//   };
// }

// const double = multiply(2);
// console.log(double(5)); // Output: 10

// Tips:
// 1. Use closures to create private data that cannot be accessed from outside the function scope.
// 2. Closures are often used in event handlers, callbacks, and functional programming to maintain state.

// Use Cases:
// - Data Encapsulation: Closures allow you to create functions with private variables that cannot be accessed from outside the function scope.
// - Maintaining State: Closures help maintain state between function calls, making them useful for things like counters and iterators.
// - Functional Programming: Closures are fundamental in functional programming patterns, enabling higher-order functions and partial application.

// Example of Maintaining State:
// function createGreeting(greeting) {
//   return function(name) {
//     return `${greeting}, ${name}!`;
//   };
// }

// const sayHello = createGreeting('Hello');
// console.log(sayHello('Alice')); // Output: Hello, Alice!
// console.log(sayHello('Bob')); // Output: Hello, Bob!

// Practice and Application:
// Understanding closures is essential for mastering JavaScript. They are used extensively in real-world JavaScript applications.
// Practice by creating functions that return other functions and retain access to their lexical scope,
// and observe how closures maintain state and create private variables.

// Overview of Immediately Invoked Function Expressions (IIFE) in JavaScript

(function () {
  console.log('Testing');
})();

// Summary:
// An Immediately Invoked Function Expression (IIFE) is a function that is executed immediately after it is defined.
// It is a design pattern that is also known as a Self-Executing Anonymous Function and has two main parts:
// - The function itself is defined within parentheses.
// - The function is then executed with the following parentheses.

// Key Points:
// - IIFEs are commonly used to create a new scope to avoid polluting the global scope.
// - They are useful for creating private variables and methods.
// - They execute immediately, making them suitable for initialization tasks.

// Syntax:
// The basic syntax of an IIFE involves wrapping a function in parentheses and immediately invoking it.
// (function() {
//   // Function body
// })();

// Example:
// (function() {
//   var message = 'Hello, World!';
//   console.log(message);
// })(); // Output: Hello, World!

// Analogy:
// Think of an IIFE as a secret message that self-destructs after being read.
// You open the message (define the function), read it immediately (invoke the function),
// and then it disappears without leaving any trace in the global scope.

// Practical Examples:
// 1. Creating a new scope to avoid global variables:
// (function() {
//   var localVariable = 'I am local';
//   console.log(localVariable); // Output: I am local
// })();

// console.log(typeof localVariable); // Output: undefined

// 2. Initializing a module:
// var counter = (function() {
//   var count = 0;
//   return {
//     increment: function() {
//       count++;
//       return count;
//     },
//     reset: function() {
//       count = 0;
//       return count;
//     }
//   };
// })();

// console.log(counter.increment()); // Output: 1
// console.log(counter.increment()); // Output: 2
// console.log(counter.reset()); // Output: 0

// Tips:
// 1. Use IIFEs to create isolated scopes for your code to avoid conflicts with other scripts.
// 2. IIFEs are especially useful in older JavaScript code to avoid polluting the global namespace.

// Use Cases:
// - Avoiding Global Variables: IIFEs help in creating a local scope for your variables and functions, preventing global namespace pollution.
// - Encapsulation: They allow for encapsulation of code, creating private variables and methods.
// - Initialization: IIFEs can be used to execute code that needs to run once, such as initialization of variables or setup code.

// Example of Avoiding Global Variables:
// (function() {
//   var privateVar = 'This is private';
//   console.log(privateVar); // Output: This is private
// })();

// console.log(typeof privateVar); // Output: undefined

// Practice and Application:
// Understanding and using IIFEs can help you write cleaner, more modular JavaScript code.
// Practice by using IIFEs to encapsulate your code and create private scopes for your variables and functions.

///////////////////////////////////////
// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0] to keep track of poll answers
  answers: new Array(4).fill(0),

  // Method to register a new answer
  registerNewAnswer() {
    // Create the prompt message
    const output = `${this.question}\n${this.options.join(
      '\n'
    )}\n(Write option number)`;
    // Get user input
    const input = prompt(output);
    // Convert the input to a number
    const answer = Number(input);

    // Validate the input and update the answers array
    if (isNaN(answer) || answer < 0 || answer >= this.answers.length) {
      alert(`${input} is not a valid entry`); // Show alert for invalid entry
    } else {
      this.answers[answer]++; // Increment the count for the chosen option
      this.displayResults(); // Display the current poll results
    }
  },

  // Method to display the results
  displayResults(results = this.answers, type = 'array') {
    // Display the results based on the specified type
    if (type === 'array') {
      console.log(results); // Display as array
    } else if (type === 'string') {
      console.log(`Poll results are: ${results.join(', ')}`); // Display as string
    }
  },
};

// Add an event listener to the button to trigger the poll
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// Bonus: Using the 'displayResults' method with test data
const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

// Display test data as array
poll.displayResults(testData1);
poll.displayResults(testData2);

// Display test data as string
poll.displayResults(testData1, 'string');
poll.displayResults(testData2, 'string');

// Overview of the bind Method in JavaScript

//    { *** <--- See Line 139 ---> *** }

// Summary:
// The `bind` method in JavaScript creates a new function that, when called, has its `this` keyword set to the provided value.
// It also allows you to partially apply arguments to the function.

// Key Points:
// - `bind` does not immediately execute the function. Instead, it returns a new function with a bound `this` context.
// - You can also bind arguments to the function, which will be prepended to the arguments provided when the function is called.

// Syntax:
// The syntax for using `bind` is straightforward.

// functionName.bind(thisArg, arg1, arg2, ...)

// Example:
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
// };

// function greet(greeting, punctuation) {
//   return `${greeting}, ${this.firstName} ${this.lastName}${punctuation}`;
// }

// const greetPerson = greet.bind(person, 'Hello');
// console.log(greetPerson('!')); // Output: Hello, John Doe!

// In this example, `bind` creates a new function `greetPerson` with `this` set to `person`.
// The greeting argument 'Hello' is also bound, and the punctuation '!' is provided when the new function is called.

// Analogy:
// Think of `bind` as pre-setting the destination and some items in your GPS.
// When you eventually start the journey (call the function), the destination (this context) and some routes (arguments) are already set for you.

// Practical Examples:
// 1. Using bind to set the this context:
// const module = {
//   x: 42,
//   getX: function() {
//     return this.x;
//   }
// };

// const unboundGetX = module.getX;
// console.log(unboundGetX()); // Output: undefined (because `this` is not bound)

// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX()); // Output: 42

// 2. Using bind for partial application of arguments:
// function multiply(a, b) {
//   return a * b;
// }

// const double = multiply.bind(null, 2); // `this` is not used in multiply, so we can pass `null`
// console.log(double(5)); // Output: 10

// Tips:
// 1. Use `bind` when you need a function with a specific `this` context that can be called later.
// 2. Utilize `bind` for partial function application to create more specific functions from generic ones.

// Example of using bind for event handling in a class:
// class Button {
//   constructor() {
//     this.clickCount = 0;
//     this.handleClick = this.handleClick.bind(this); // Bind `this` to the instance
//   }

//   handleClick() {
//     this.clickCount++;
//     console.log(`Button clicked ${this.clickCount} times`);
//   }
// }

// const button = new Button();
// document.querySelector('button').addEventListener('click', button.handleClick);

// Use Cases:
// - Ensuring a function has a consistent `this` context, regardless of how it is called.
// - Creating partially applied functions to simplify code and improve readability.
// - Event handling where the callback function needs to reference the instance of a class.

// Practice and Application:
// Mastering `bind` is crucial for managing `this` in JavaScript, especially in event handling and functional programming.
// Practice by creating bound functions and using them in different scenarios to understand their behavior.

// Overview of the call and apply Methods in JavaScript

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}: ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}: ${flightNum}`, name });
  },
};

lufthansa.book(239, 'Joshua Rice');
lufthansa.book(635, 'Sarah Rice');
console.log(lufthansa);

const euroWings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Will return undefined because we are trying to use the 'this' keyword
// book(23, 'Sarah Williams');

// book.call(euroWings, 23, 'Sarah Williams');
console.log(euroWings);

const swiss = {
  airline: 'Swiss',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 654, 'John Doe');
console.log(swiss);

const flightData = [561, 'Jane Doe'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);

const bookEW = book.bind(euroWings);
const bookLX = book.bind(swiss);
const bookLH = book.bind(lufthansa);

bookEW(23, 'Seven Williams');

const bookEW23 = book.bind(euroWings, 23);
bookEW23('Joshua Rice');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  // console.log(`Buy Plane clicked`);
  // console.log(this);
  this.planes++;
  console.log(this.planes);
};

// Binding the correct context to the event listener
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.06, 1600));

const addVat = addTax.bind(null, 0.23);
console.log(addVat(100));

// Function that returns another function to subtract tax
const createTaxSubtractor = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const subTax = createTaxSubtractor(0.06);
console.log(subTax(1600)); // Output: 1504

const subVat = createTaxSubtractor(0.23);
console.log(subVat(100)); // Output: 77

// Summary:
// The `call` and `apply` methods in JavaScript are used to invoke functions with a specified `this` context.
// They allow you to call a function and explicitly set the `this` value inside the function.

// Key Points:
// - Both `call` and `apply` methods are used to set the `this` context of a function.
// - The main difference between `call` and `apply` is how they handle arguments:
//   - `call` accepts an argument list.
//   - `apply` accepts a single array of arguments.

// Syntax:
// The syntax for using `call` and `apply` is similar.

// `call`:
// functionName.call(thisArg, arg1, arg2, ...)

// `apply`:
// functionName.apply(thisArg, [arg1, arg2, ...])

// Example of call:
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
// };

// function greet(greeting) {
//   return `${greeting}, ${this.firstName} ${this.lastName}!`;
// }

// console.log(greet.call(person, 'Hello')); // Output: Hello, John Doe!

// Example of apply:
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
// };

// function greet(greeting) {
//   return `${greeting}, ${this.firstName} ${this.lastName}!`;
// }

// console.log(greet.apply(person, ['Hello'])); // Output: Hello, John Doe!

// Analogy:
// Think of `call` and `apply` as similar to making a phone call to a person (function).
// With `call`, you are giving them specific instructions one by one (arguments individually).
// With `apply`, you are handing them a written note with all the instructions at once (an array of arguments).

// Practical Examples:
// 1. Using call to set the this context:
// const car = {
//   brand: 'Toyota',
//   getCarInfo: function(model) {
//     return `${this.brand} ${model}`;
//   },
// };

// const anotherCar = {
//   brand: 'Honda',
// };

// console.log(car.getCarInfo.call(anotherCar, 'Civic')); // Output: Honda Civic

// 2. Using apply to set the this context:
// function introduce(name, age) {
//   return `My name is ${name} and I am ${age} years old. I am a ${this.profession}.`;
// }

// const person = {
//   profession: 'developer',
// };

// console.log(introduce.apply(person, ['Alice', 30])); // Output: My name is Alice and I am 30 years old. I am a developer.

// Tips:
// 1. Use `call` when you have a fixed number of arguments and want to list them individually.
// 2. Use `apply` when you have an array of arguments, especially if the number of arguments can vary.

// Example of using apply with variable arguments:
// function sum() {
//   return Array.prototype.reduce.apply(arguments, [(total, num) => total + num, 0]);
// }

// console.log(sum(1, 2, 3, 4)); // Output: 10

// Use Cases:
// - Borrowing Methods: You can use `call` or `apply` to borrow methods from other objects.
// - Invoking Functions: They are helpful when you need to invoke functions with a specific `this` context.
// - Variadic Functions: `apply` is useful when dealing with functions that accept a variable number of arguments.

// Practice and Application:
// Mastering `call` and `apply` is important for understanding and controlling the `this` context in JavaScript.
// Practice by using them in different scenarios, such as borrowing methods from other objects and working with variadic functions.

// Overview of Functions Accepting Callback Functions in JavaScript
const greet = greeting => {
  return name => {
    console.log(`${greeting}, ${name}`);
  };
};

const greaterHey = greet('hey');
greaterHey('Joshua'); // Output: hey, Joshua

// Summary:
// A callback function is a function that is passed as an argument to another function
// and is executed after some operation has been completed. Callbacks are used to handle asynchronous operations
// and allow for more flexible and modular code.

// Key Points:
// - Callbacks are functions passed as arguments to other functions.
// - They are often used for asynchronous operations, such as handling events, making API calls, or reading files.
// - Callbacks ensure that code execution continues smoothly and certain operations happen only after others complete.

// Example of a Callback Function:
// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { name: 'John', age: 30 };
//     callback(data);
//   }, 1000);
// }

// function displayData(data) {
//   console.log(data);
// }

// fetchData(displayData); // Output after 1 second: { name: 'John', age: 30 }

// Analogy:
// Think of callback functions as a relay baton in a relay race. When one runner (function) finishes their part,
// they pass the baton (callback function) to the next runner (function). This ensures that each part of the process
// happens in the correct order.

// Practical Examples:
// 1. Event Handling:
// document.getElementById('myButton').addEventListener('click', function() {
//   alert('Button clicked!');
// });

// 2. Array Methods (e.g., map, filter, reduce):
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(function(num) {
//   return num * 2;
// });
// console.log(doubled); // Output: [2, 4, 6, 8, 10]

// 3. Asynchronous Operations:
// function getData(callback) {
//   setTimeout(function() {
//     const data = 'some data';
//     callback(data);
//   }, 2000);
// }

// function processData(data) {
//   console.log('Processing:', data);
// }

// getData(processData); // Output after 2 seconds: Processing: some data

// Benefits of Callback Functions:
// - **Asynchronous Processing**: Callbacks allow for non-blocking operations, enabling code to continue running while waiting for an operation to complete.
// - **Modularity**: They enable you to pass different functions as callbacks, making your code more modular and reusable.
// - **Event Handling**: Callbacks are essential for handling user interactions and other events.

// Tips for Using Callback Functions:
// 1. **Naming**: Use descriptive names for your callback functions to make your code more readable.
// 2. **Error Handling**: When dealing with asynchronous operations, consider adding error handling in your callbacks.
// 3. **Anonymous Functions**: You can use anonymous functions as callbacks, but for complex operations, named functions can improve readability.

// Example of Error Handling in Callbacks:
// function fetchData(callback, errorCallback) {
//   setTimeout(() => {
//     const error = false;
//     if (error) {
//       errorCallback('An error occurred.');
//     } else {
//       const data = { name: 'John', age: 30 };
//       callback(data);
//     }
//   }, 1000);
// }

// function handleError(error) {
//   console.error(error);
// }

// fetchData(displayData, handleError); // Output after 1 second: { name: 'John', age: 30 }
// // If an error occurred: An error occurred.

// Use Cases:
// - **API Calls**: Making HTTP requests to fetch or send data to a server.
// - **Event Listeners**: Responding to user actions like clicks, typing, or hovering.
// - **Timers**: Performing operations after a set amount of time with `setTimeout` or `setInterval`.

// Practice and Application:
// To become proficient with callback functions, practice creating and using them in various scenarios,
// such as handling events, performing asynchronous operations, and using array methods. Understanding callbacks
// is essential for mastering JavaScript, especially when dealing with asynchronous code.

// Overview of First-Class and Higher-Order Functions in JavaScript

// Function to remove all spaces from a string and convert it to lowercase
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// Function to capitalize the first word of a string and keep the rest of the words unchanged
const upperFirstWord = function (str) {
  // Split the string into an array of words
  const [first, ...otherWords] = str.split(' ');
  // Capitalize the first word and concatenate it with the rest of the words
  return [first.toUpperCase(), ...otherWords].join(' ');
};

// Higher-order function that takes a string and a transformation function as arguments
const transformer = function (str, fn) {
  // Log the original string
  console.log(`Original String: ${str}`);
  // Log the transformed string by applying the transformation function
  console.log(`Transformed string: ${fn(str)}`);
  // Log the name of the transformation function used
  console.log(`Transformed by: ${fn.name}`);
};

// Call the transformer function with a string and the upperFirstWord transformation function
transformer('JavaScript is the best!', upperFirstWord);
// Output:
// Original String: JavaScript is the best!
// Transformed string: JAVASCRIPT is the best!
// Transformed by: upperFirstWord

// Call the transformer function with a string and the oneWord transformation function
transformer('JavaScript is the best!', oneWord);
// Output:
// Original String: JavaScript is the best!
// Transformed string: javascriptisthebest!
// Transformed by: oneWord

// const hight5 = function () {
//   console.log(`👋`);
// };
// document.body.addEventListener('click', hight5);

// ['Joshua', 'Sarah', 'Ava'].forEach(hight5);

// Summary:
// In JavaScript, functions are first-class citizens, meaning they can be treated like any other value.
// They can be assigned to variables, passed as arguments, and returned from other functions.
// Higher-order functions are functions that take other functions as arguments or return functions as their result.

// First-Class Functions:
// Functions in JavaScript are treated as first-class citizens, which means they can:
// - Be stored in variables
// - Be passed as arguments to other functions0
// - Be returned from other functions
// - Be stored in data structures like arrays and objects.

// Example of First-Class Functions:
// const sayHello = function() {
//   return 'Hello!';
// };

// console.log(sayHello()); // Output: Hello!

// Higher-Order Functions:
// Higher-order functions are functions that either take one or more functions as arguments,
// return a function as a result, or both. They enable functional programming patterns and can help
// in creating more modular and reusable code.

// Example of Higher-Order Functions:
// function higherOrderFunction(callback) {
//   return callback();
// }

// function greet() {
//   return 'Hello, world!';
// }

// console.log(higherOrderFunction(greet)); // Output: Hello, world!

// Analogy for First-Class Functions:
// Imagine functions as first-class passengers on a flight. They have all the privileges that any other passenger has.
// They can be seated, moved around, and enjoy all the services just like any other passenger (value) in the program.

// Analogy for Higher-Order Functions:
// Think of higher-order functions as a manager who can assign tasks to other employees (functions).
// The manager (higher-order function) can delegate tasks (pass functions as arguments) and even promote an employee to a new position (return a function).

// Practical Examples:
// 1. Functions stored in variables:
// const add = (a, b) => a + b;
// console.log(add(2, 3)); // Output: 5

// 2. Functions passed as arguments:
// function logResult(fn, a, b) {
//   console.log(fn(a, b));
// }

// logResult(add, 2, 3); // Output: 5

// 3. Functions returned from functions:
// function createMultiplier(multiplier) {
//   return function(num) {
//     return num * multiplier;
//   };
// }

// const double = createMultiplier(2);
// console.log(double(5)); // Output: 10

// Benefits of Higher-Order Functions:
// - **Abstraction**: They allow you to abstract over actions, not just values.
// - **Code Reuse**: They help in reusing code by creating generic functions that can work with any function passed to them.
// - **Modularity**: They make the code more modular and easier to test.

// Common Higher-Order Functions:
// - **Array.prototype.map()**: Applies a function to each element in an array and returns a new array with the results.
// - **Array.prototype.filter()**: Creates a new array with all elements that pass the test implemented by the provided function.
// - **Array.prototype.reduce()**: Applies a function against an accumulator and each element in the array to reduce it to a single value.

// Example of Array Methods:
// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // Output: [2, 4, 6, 8, 10]

// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// const sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum); // Output: 15

// Practice and Application:
// Understanding first-class and higher-order functions is crucial for mastering JavaScript and functional programming concepts.
// Practice by creating your own higher-order functions and using array methods to manipulate data more effectively.

// Overview of Passing Arguments by Value vs. Reference in JavaScript

// Define a flight number as a string
const flight = 'LM234';

// Create an object representing a passenger
const joshua = {
  name: 'Joshua Rice',
  passport: 235448961,
};

// Function to check in a passenger
const checkIn = function (flightNum, passenger) {
  // Reassign the flight number (this does not affect the original flight variable)
  flightNum = 'LH999';
  // Modify the passenger's name by adding a prefix
  passenger.name = 'Mr.' + passenger.name;

  // Check the passenger's passport number
  if (passenger.passport === 235448961) {
    console.log(`Check In`);
  } else {
    console.log(`Wrong Passport`);
  }
};

// Call the checkIn function with the flight number and passenger object
checkIn(flight, joshua);
// Output: Check In

// Log the original flight number (unchanged)
console.log(flight); // Output: LM234

// Log the modified passenger object (name has been changed)
console.log(joshua); // Output: { name: 'Mr.Joshua Rice', passport: 235448961 }

// Illustrate that assigning the flight number and passenger object to new variables
// is essentially the same as using the original variables
const flightNum = flight;
const passanger = joshua;

// Function to update a passenger's passport number
const newPassport = function (person) {
  // Generate a new random passport number and assign it to the person object
  person.passport = Math.trunc(Math.random() * 156);
};

// Call the newPassport function to change the passenger's passport number
newPassport(joshua);

// Call the checkIn function again with the flight number and modified passenger object
checkIn(flight, joshua);
// Output: Wrong Passport (due to the changed passport number)

// Summary:
// In JavaScript, arguments can be passed to functions either by value or by reference.
// Understanding the difference between these two methods is essential for effective coding.

// Key Points:
// - Primitive types (numbers, strings, booleans, null, undefined, symbols, and BigInts) are passed by value.
// - Objects (including arrays and functions) are passed by reference.

// Passing by Value:
// When an argument is passed by value, the function receives a copy of the original value.
// This means any changes made to the parameter inside the function do not affect the original value outside the function.

// Example:
// function changeValue(a) {
//   a = 10;
// }

// let x = 5;
// changeValue(x);
// console.log(x); // Output: 5

// In this example, `x` is passed by value to the function `changeValue`.
// Inside the function, `a` is modified, but this does not affect `x` outside the function.

// Passing by Reference:
// When an argument is passed by reference, the function receives a reference to the original object.
// This means any changes made to the parameter inside the function do affect the original object outside the function.

// Example:
// function changeReference(obj) {
//   obj.value = 10;
// }

// let y = { value: 5 };
// changeReference(y);
// console.log(y.value); // Output: 10

// In this example, the object `y` is passed by reference to the function `changeReference`.
// Inside the function, modifying `obj.value` affects `y.value` outside the function.

// Analogy:
// Think of passing by value as giving someone a photocopy of a document.
// They can make changes to the copy, but your original document remains unchanged.

// function makeChanges(copy) {
//   copy.title = 'New Title';
// }

// let original = { title: 'Original Title' };
// let copy = { ...original };
// makeChanges(copy);
// console.log(original.title); // Output: Original Title

// Think of passing by reference as giving someone a shared link to a Google Doc.
// Any changes they make to the document are immediately reflected in your copy as well.

// function makeChanges(doc) {
//   doc.title = 'New Title';
// }

// let sharedDoc = { title: 'Original Title' };
// makeChanges(sharedDoc);
// console.log(sharedDoc.title); // Output: New Title

// Tips:
// 1. Be mindful of unintended side effects when passing objects to functions.
//    Changes inside the function will affect the original object outside the function.
// 2. To avoid modifying the original object, you can create a shallow copy using Object.assign() or the spread operator (`...`).

// Example:
// function changeReferenceSafe(obj) {
//   let copy = { ...obj };
//   copy.value = 10;
//   return copy;
// }

// let z = { value: 5 };
// let newZ = changeReferenceSafe(z);
// console.log(z.value); // Output: 5
// console.log(newZ.value); // Output: 10

// Use Cases:
// - Use passing by value when you want to work with a copy of a primitive value without affecting the original value.
// - Use passing by reference when you need to manipulate the original object or when working with large objects
//   to avoid the overhead of copying them.

// Practice and Application:
// Understanding how arguments are passed in JavaScript helps you write more predictable and bug-free code.
// Practice by creating functions that handle both primitive types and objects, and observe the differences in behavior.

// Overview of Default Parameters in JavaScript Functions

// Initialize an empty array to store bookings
const booking = [];

// Function to create a booking with default parameters
const creatBooking = function (
  flightNum, // Flight number (required)
  numPassengers = 1, // Number of passengers, default is 1
  price = 200.15 * numPassengers // Price, default is calculated based on number of passengers
) {
  // Create a booking object with the provided or default values
  const bookings = {
    flightNum,
    numPassengers,
    price,
  };

  // Log the booking details to the console
  console.log(
    `Flight: ${flightNum}, Number of Passengers: ${numPassengers}, Price: $${price}`
  );

  // Add the booking object to the booking array
  booking.push(bookings);
};

// Create a booking with default number of passengers and price
creatBooking('LH123');
// Output: Flight: LH123, Number of Passengers: 1, Price: $200.15

// Create a booking with specified number of passengers and calculated price
creatBooking('LH123', 15);
// Output: Flight: LH123, Number of Passengers: 15, Price: $3002.25

// Summary:
// In JavaScript, default parameters allow you to initialize a function parameter with a default value
// if no value or `undefined` is provided. This feature was introduced in ECMAScript 2015 (ES6)
// and helps to avoid issues related to `undefined` parameters and simplifies function handling.

// Key Points:
// - Default parameters provide a way to set a value to a parameter if the caller of the function doesn't supply one.
// - This makes your code more robust and reduces the need for additional checks within the function body.

// Syntax:
// The syntax for default parameters is straightforward. You simply assign a default value to the parameter
// in the function definition.

// Example:
// Here’s a simple example to illustrate default parameters:

// function greet(name = 'Guest') {
//   return `Hello, ${name}!`;
// }

// console.log(greet('Alice')); // Output: Hello, Alice!
// console.log(greet()); // Output: Hello, Guest!

// In this example, the `greet` function has a default parameter `name` set to `'Guest'`.
// If the function is called without an argument, `name` will take the default value `'Guest'`.

// Analogy:
// Think of default parameters as having a backup plan. Imagine you run a coffee shop,
// and you offer a default coffee (say, black coffee) if a customer doesn't specify their preference.
// This way, every customer gets served without needing to check if they specified what kind of coffee they want.
// The default option ensures smooth operation and customer satisfaction.

// function serveCoffee(type = 'black coffee') {
//   return `Serving ${type}.`;
// }

// console.log(serveCoffee('espresso')); // Output: Serving espresso.
// console.log(serveCoffee()); // Output: Serving black coffee.

// Multiple Parameters:
// You can use default parameters with multiple parameters. Each parameter can have its own default value.

// function order(item = 'burger', drink = 'water') {
//   return `Order: ${item} and ${drink}.`;
// }

// console.log(order('pizza', 'soda')); // Output: Order: pizza and soda.
// console.log(order('pizza')); // Output: Order: pizza and water.
// console.log(order()); // Output: Order: burger and water.

// Tips:
// 1. Order Matters: Default parameters work from left to right.
//    A parameter without a default value cannot follow a parameter with a default value.

//    // Incorrect
//    // function example(a = 1, b) { // Syntax Error
//    //   // ...
//    // }

//    // Correct
//    // function example(a, b = 1) {
//    //   // ...
//    // }

// 2. Using Expressions: You can use any valid expression as a default value, including function calls and operations.

//    // function getValue() {
//    //   return 42;
//    // }

//    // function example(a = getValue()) {
//    //   return a;
//    // }

//    // console.log(example()); // Output: 42

// Use Cases:
// - Simplifying Code: Default parameters simplify the function body by removing the need for `if` statements to check for `undefined`.
// - Enhancing Functionality: They make functions more versatile and easier to use with various argument configurations.

// Practice and Application:
// Understanding default parameters is crucial for modern JavaScript development. They are widely used in libraries and frameworks,
// making your code cleaner and more readable. Practice using default parameters by implementing them in your functions
// and exploring scenarios where they can make your code more robust.
