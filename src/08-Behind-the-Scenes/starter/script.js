'use strict';

/* 
  High-Level Overview of JavaScript
*/

/* High-Level Language */
// Example: Low-level languages like C require manual management of computer memory.
// JavaScript: Includes a built-in garbage collection algorithm that automatically manages memory.

/* Interpreted or Just-In-Time Compiled */
// JavaScript abstracts machine code, making it easier for the CPU to execute.
// Interpreted: Executes code line by line, making it flexible but potentially slower.
// Just-In-Time (JIT) Compilation: Combines interpretation and compilation for better performance.

/* Multi-Paradigm */
// Definition: An approach and mindset for structuring code, influencing your coding style and technique.
// - Imperative: Describes how to perform tasks using statements.
// - Declarative: Describes what you want to achieve, letting the underlying system handle the how.
// - Procedural Programming: A linear style, most common in programming.
// - Functional Programming: Treats computation as the evaluation of mathematical functions, avoiding changing state and mutable data.

/* Prototype-Based Object-Oriented */
// JavaScript uses prototypes for object-oriented programming, allowing objects to inherit directly from other objects.
// - Prototype Chain: Mechanism by which JavaScript objects inherit features from one another.

/* First-Class Functions */
// Definition: Functions are treated as variables, meaning they can be passed into other functions and returned from functions.
// - Higher-Order Functions: Functions that take other functions as arguments or return them as results.

/* Dynamic Typing */
// JavaScript: A dynamically-typed language where variable types are determined at runtime and can change automatically.
// - Type Coercion: Automatic or implicit conversion of values from one data type to another.

/* Single-Threaded */
// Concurrency Model: The JS engine handles multiple tasks through a single thread, allowing only one task at a time.
// - Event Loop: Mechanism that handles asynchronous callbacks.
// - Call Stack: Manages the execution of function calls.
// - Callback Queue: Queues tasks to be processed by the event loop.

/* Non-Blocking Event Loop */
// Event Loop: Manages the execution of code, event callbacks, and other tasks in a non-blocking manner.
// - Non-Blocking I/O: Allows other operations to continue running while I/O operations are being performed.

/* 
  JavaScript Engine and Runtime
*/

/* JavaScript Engine */
// Definition: A program that executes JavaScript code.
// - Call Stack: Manages execution contexts.
// - Heap: Handles memory allocation.

/* Compilation vs. Interpretation */

/* Compilation */
// Process: Converts entire code into machine code at once, resulting in a portable binary file.
// Steps: Source Code -> Compilation -> Machine Code (Binary File) -> Execution

/* Interpretation */
// Process: Interpreter runs through the source code line by line, executing it.
// Steps: Source Code -> Line-by-Line Execution -> Program Running

/* Just-In-Time Compilation */
// Process: Converts entire code into machine code at once and executes it immediately.
// Steps: Source Code -> Compilation -> Machine Code -> Execution
// Modern JIT: Involves parsing to Abstract Syntax Tree (AST), compilation to machine code, and execution in the call stack with optimizations happening in separate threads.

/* JavaScript Runtime */
// Definition: A container encompassing the heap, call stack, web APIs (DOM, timers, fetch API), callback queue, and the event loop.
// Different Runtimes: JavaScript can run in different environments, such as browsers or Node.js, which uses C++ bindings.
// - Web APIs: Provide functionalities like DOM manipulation, timers, and HTTP requests.
// - Callback Queue: Stores asynchronous callbacks to be executed by the event loop.

/* 
  Execution Contexts and the Call Stack
*/

/* Execution Context */
// Definition: The environment in which JavaScript code is executed, storing all necessary information for execution.
// Components:
// - Variable Environment: Stores function and variable declarations.
// - Lexical Environment: Environment that holds the current scope's variables and its outer environment.
// - This Binding: References the object in the current execution context.

/* Global Execution Context */
// Creation: Formed during the compilation phase for top-level code.
// Example: The global execution context initializes constants and other top-level code.
// Properties: Contains global object (e.g., window in browsers), this keyword, and outer environment references.

/* Function Execution Context */
// Process: For each function call, a new execution context is created.
// Hierarchy: Only one global execution context exists by default, with additional execution contexts created for each function call.
// Lifecycle:
// - Creation Phase: Sets up variable objects, creates scope chain, and determines this value.
// - Execution Phase: Executes the function code line by line.

/* Execution Stack */
// Definition: A stack data structure that stores execution contexts.
// Process: The stack follows LIFO (Last In, First Out) to manage the execution of multiple contexts.
// What's inside EC? Variable Environment (let, const and var) functions, arguments object
// Scope Chain - variables

/*!SECTION    SCOPE AND THE SCOPE CHAIN
    // Scope: The context in which variables and functions are accessible.
    // Types of Scope:
    // - Global Scope: Variables declared outside any function or block are in the global scope.
    // - Function Scope: Variables declared inside a function are accessible only within that function.
    // - Block Scope: Variables declared with let or const inside a block (e.g., if, for) are only accessible within that block.

    // Scope Chain: A hierarchy of scopes that determines how variables are resolved.
    // - Analogy: Think of scope as rooms in a house. If you need something (a variable), you start searching in the room you are 
        in (current scope). If you don’t find it, you move to the next room (outer scope) until you find it or reach the global scope (the whole house).
*/

// Call stack Example

// const a = ' Joshua ';
// firstFunction();

// function firstFunction() {
//   const b = ' hello ';
//   secondFunction();

//   function secondFunction() {
//     const c = ' hi ';
//     thirdFunction();
//   }
// }

// function thirdFunction() {
//   const d = ' hey ';
//   console.log(d + c + b + a);
// }

///*!SECTION    SCOPING PRACTICE
// Practical example:
// function outerFunction() {
//     const outerVar = 'I am outside!';
//     function innerFunction() {
//         const innerVar = 'I am inside!';
//         console.log(outerVar); // Accessible due to scope chain
//     }
//     innerFunction();
//     console.log(innerVar); // Error: innerVar is not defined
// }
// outerFunction();
/*
    function calcAge(birthYear) {
    const age = 2024 - birthYear;

    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear > 1981 && birthYear < 1996) {
        var millenial = true;
        const str = `Ohh... You are also a millenial ${firstName}`;
        console.log(str);

        function add(a, b) {
            return a + b;
        }
        //!SECTION    Reassigning out scope's variable
        output = 'New Output';
        }

        //console.log(str); <- Cannot be accessed outside its block scope
        console.log(millenial);
        // console.log(add(3, 2)); Not accesible outside of its block scope. Comment out strict mode
        console.log(output);
    }

    printAge();

    return age;
    }

    const firstName = 'Joshua';

    calcAge(1988);

*/

/*!SECTION    VARIABLE ENVIRONMENT: HOISTING AND THE TDZ
    // Variable Environment: Part of the execution context that holds variable and function declarations.
    // Hoisting: JavaScript's behavior of moving declarations to the top of their scope during compilation.
    // - Analogy: Imagine preparing for a party. You gather all the necessary ingredients (declarations) before you start cooking (executing the code).

    // Temporal Dead Zone (TDZ): The period from the start of the block until the variable is declared.
    // - Analogy: The TDZ is like reaching for an ingredient before you’ve unpacked your groceries. You know you have it, but you can’t use it until you take it out of the bag (declare it).
*/

/*!SECTION    HOISTING AND TDZ IN PRACTICE  (Temporal Dead Zone, let and const)
    // Practical example:
    // console.log(hoistedVar); // undefined due to hoisting
    // console.log(letVar); // ReferenceError due to TDZ
    // var hoistedVar = 'I am hoisted!';
    // let letVar = 'I am in TDZ until declared!';
*/
// Hoisting with variables
// console.log(me); // <- is able to be hoisted but since it is not defined yet. By default it will always be "undefined"
// // console.log(job);
// // console.log(year);

// var me = 'Joshua';
// let job = 'Programmer';
// const year = 1988;

// console.log(addDecl(2, 3));
// // console.log(addExp(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }
// //const addExp = function (a, b) {
// //  return a + b;
// //};
// //var addArrow = (a, b) => a + b;

// // Example
// if (!numProducts) {
//   deleteShoppingCart();
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`All products deleted`);
// }

// const myName = 'Joshua';
// if (myName === 'Joshua') {
//   console.log(`${myName} is a ${job}`); // <- Reference error since you cannont not access variables "job" before declaration (TDZ)
//   const age = 2024 - 1988;
//   console.log(age);
//   const job = 'Programmer';
//   console.log(x); // <- x is not defined
// }

/*!SECTION    THE "THIS" KEYWORD
    // "this" Keyword: Refers to the object that is executing the current function.
    // - Global context: In the global execution context, "this" refers to the global object (window in browsers).
    // - Method context: When a function is called as a method of an object, "this" refers to that object.
    // - Constructor context: In a constructor function, "this" refers to the new object being created.
    // - Arrow functions: Do not have their own "this". They inherit "this" from the parent scope.

    // Analogy: "this" is like the person holding the camera in a selfie. In different contexts, the person holding the camera changes,
    reflecting who is currently executing the function.
*/

/*!SECTION    THE THIS KEYWORD IN PRACTICE
    // Practical example:
    // console.log(this); // In the global scope, refers to the window object
    // const obj = {
    //     name: 'John',
    //     greet: function() {
    //         console.log(this.name); // "this" refers to obj
    //     }
    // };
    // obj.greet();
*/

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2024 - birthYear);
//   console.log(this); // Undefined
// };
// calcAge(1988);

// const calcAgeArrow = birthYear => {
//   console.log(2024 - birthYear);
//   console.log(this); // returns Parent SCOPE i.e Window
// };
// calcAgeArrow(1988);

// const joshua = {
//   year: 1988,
//   currentYear: 2024,
//   calcAge: function () {
//     console.log(this);
//     console.log(this.currentYear - this.year);
//   },
// };
// joshua.calcAge();

// const matilida = {
//   year: 2017,
//   currentYear: 2024,
// };
// matilida.calcAge = joshua.calcAge;
// matilida.calcAge();

// const f = joshua.calcAge;
// f();

/*!SECTION    REGULAR FUNCTIONS VS ARROW FUNCTIONS
    // Regular Functions: Have their own "this" binding depending on how they are called.
    // Arrow Functions: Do not have their own "this". They inherit "this" from the enclosing lexical context.
    // - Analogy: Regular functions are like actors who play different roles (different "this" contexts) in different movies. Arrow functions are like actors who always play themselves regardless of the role.

    // Practical example:
    // const obj = {
    //     regularFunc: function() {
    //         console.log(this); // "this" refers to obj
    //     },
    //     arrowFunc: () => {
    //         console.log(this); // "this" refers to the global object or undefined in strict mode
    //     }
    // };
    // obj.regularFunc();
    // obj.arrowFunc();
*/

// const joshua = {
//   firstName: 'Joshua',
//   year: 1988,
//   currentYear: 2024,
//   calcAge: function () {
//     console.log(this);
//     console.log(this.currentYear - this.year);

//     const isMillenial = function () {
//       console.log(this);
//       console.log(`Hey ${this.firstName}`);
//     };
//   },

//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//   }, //     Never use Arrow function as a method
// };
// joshua.greet();
// joshua.calcAge();

/*!SECTION    PRIMITIVES VS OBJECTS (PRIMITIVES VS. REFERENCE TYPES)
    // Primitives: Basic data types (number, string, boolean, null, undefined, symbol, bigint).
    // - Stored directly in the memory location associated with the variable.

    // Objects: Complex data types (objects, arrays, functions).
    // - Stored as references. The variable contains a reference (memory address) to the location where the object is stored.

    // Analogy: Primitives are like storing a copy of a document in a drawer (each variable has its own copy). Objects are like having a document stored in a cloud (each variable points to the same document in the cloud).
*/

// let age = 36;
// let oldAge = age;
// age++;

// console.log(age); // 37
// console.log(oldAge); // 36

// const me = {
//   name: 'Joshua',
//   age: 36,
// };

// const friend = me; // You are copying the reference (address) of the object 'me' to 'friend'
// friend.age = 27; // You are now changing the 'age' property of the object that both 'me' and 'friend' reference.

// console.log(`Friend: ${friend.age}`); // 27, 'friend.age' points to the same object as 'me', so the change is reflected in both
// console.log(`Me : ${me.age}`); // 27, 'me.age' points to the same object as 'friend', so the change is reflected in both

/*!SECTION    PRIMITIVES VS OBJECTS IN PRACTICE
    // Practical example:
    // let a = 10;
    // let b = a; // b is a copy of a
    // a = 20;
    // console.log(a, b); // 20, 10

    // let obj1 = { name: 'Alice' };
    // let obj2 = obj1; // obj2 is a reference to obj1
    // obj1.name = 'Bob';
    // console.log(obj1.name, obj2.name); // 'Bob', 'Bob'
*/
//  Primitive Type
let lastName = 'Beiler';
let surName = lastName;
lastName = 'Rice';

console.log(surName, lastName);

const sarah = {
  fName: 'Sarah',
  lName: 'Beiler',
  age: 34,
};

const marriedSarah = sarah;
marriedSarah.lname = 'Rice';
console.log('Before :', sarah);
console.log(`After :`, marriedSarah);

const sarah2 = {
  fName: 'Sarah',
  lName: 'Beiler',
  age: 34,
  family: ['Ben', 'Lynn', 'Aaron', 'Bethany', 'Rebecca'],
};

const marriedSarah2 = Object.assign({}, sarah2); // <- Creates a new shallow copy not a deep clone.
marriedSarah2.lName = 'Rice';
console.log('Before :', sarah2);
console.log(`After :`, marriedSarah2);

marriedSarah2.family.push('Joshua');
marriedSarah2.family.push('Ava');
marriedSarah2.family.push('Adeline');

console.log('Before :', sarah2);
console.log(`After :`, marriedSarah2);
