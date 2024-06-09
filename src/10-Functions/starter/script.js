'use strict';

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

const hight5 = function () {
  console.log(`👋`);
};
document.body.addEventListener('click', hight5);

['Joshua', 'Sarah', 'Ava'].forEach(high5);

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
