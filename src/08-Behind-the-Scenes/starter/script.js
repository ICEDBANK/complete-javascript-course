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

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear > 1981 && birthYear < 1996) {
      var millenial = true;
      const str = `Ohh... You are also a millenial ${firstName}`;
      console.log(str);
    }

    //console.log(str); <- Cannot be accessed outside its block scope
    console.log(millenial);
  }

  printAge();

  return age;
}

const firstName = 'Joshua';

calcAge(1988);

//*/

/*!SECTION    VARIABLE ENVIRONMENT: HOISTING AND THE TDZ
    // Variable Environment: Part of the execution context that holds variable and function declarations.
    // Hoisting: JavaScript's behavior of moving declarations to the top of their scope during compilation.
    // - Analogy: Imagine preparing for a party. You gather all the necessary ingredients (declarations) before you start cooking (executing the code).

    // Temporal Dead Zone (TDZ): The period from the start of the block until the variable is declared.
    // - Analogy: The TDZ is like reaching for an ingredient before you’ve unpacked your groceries. You know you have it, but you can’t use it until you take it out of the bag (declare it).
*/

/*!SECTION    HOISTING AND TDZ IN PRACTICE
    // Practical example:
    // console.log(hoistedVar); // undefined due to hoisting
    // console.log(letVar); // ReferenceError due to TDZ
    // var hoistedVar = 'I am hoisted!';
    // let letVar = 'I am in TDZ until declared!';
*/

/*!SECTION    THE "THIS" KEYWORD
    // "this" Keyword: Refers to the object that is executing the current function.
    // - Global context: In the global execution context, "this" refers to the global object (window in browsers).
    // - Method context: When a function is called as a method of an object, "this" refers to that object.
    // - Constructor context: In a constructor function, "this" refers to the new object being created.
    // - Arrow functions: Do not have their own "this". They inherit "this" from the parent scope.

    // Analogy: "this" is like the person holding the camera in a selfie. In different contexts, the person holding the camera changes, reflecting who is currently executing the function.
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

/*!SECTION    PRIMITIVES VS OBJECTS (PRIMITIVES VS. REFERENCE TYPES)
    // Primitives: Basic data types (number, string, boolean, null, undefined, symbol, bigint).
    // - Stored directly in the memory location associated with the variable.

    // Objects: Complex data types (objects, arrays, functions).
    // - Stored as references. The variable contains a reference (memory address) to the location where the object is stored.

    // Analogy: Primitives are like storing a copy of a document in a drawer (each variable has its own copy). Objects are like having a document stored in a cloud (each variable points to the same document in the cloud).
*/

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
