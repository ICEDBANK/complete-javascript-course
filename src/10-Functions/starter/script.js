'use strict';

// Overview of Default Parameters in JavaScript Functions

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
