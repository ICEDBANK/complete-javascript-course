'use strict';

/*! Array destructuring Summary
    In JavaScript allows you to unpack values from arrays into distinct variables in a
    clean and readable way. It can be used for simple extraction, skipping elements, setting default values,
    handling nested arrays, swapping variables, and working with function returns.

    This feature enhances the expressiveness of your code and reduces the need for repetitive and verbose statements.
*/

// Example of array destructuring
const arr = [2, 3, 4, 5];
const [w, x, y, z] = arr; // Destructuring assignment
console.log(w, x, y, z);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // Returning an array of values based on the provided indexes
  },
  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Destructuring with skipping elements
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Swapping variables using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Destructuring with function returns
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(`${starter}, and ${mainCourse}`);

// Destructuring nested arrays
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Destructuring with default values
const [p = 1, q = 1, r = 'end'] = [8, 9];
console.log(p, q, r);

// Example of object destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Renaming variables while destructuring
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values in object destructuring
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables while destructuring objects
let a = 111;
let b = 222;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Destructuring nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/*! Spread Operator Summary
    The spread operator (...) in JavaScript is a powerful tool that allows you to expand elements
    of an iterable (like an array or string) into individual elements. It can be used in various
    contexts, such as array literals, function calls, and object literals, providing a concise and
    readable way to manipulate arrays and objects.
*/

// Spread operator with arrays
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // [1, 2, 3]

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

const array = [1, 2, 3];
const newArray = [0, ...array, 4];
console.log(newArray); // [0, 1, 2, 3, 4]

// Spread operator with objects
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
console.log(copiedObject); // { a: 1, b: 2 }

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // { a: 1, b: 2, c: 3, d: 4 }

const newObject = { ...originalObject, b: 3 };
console.log(newObject); // { a: 1, b: 3 }

// Spread operator with function calls
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

// Using spread operator with strings
const str = 'Joshua';
const letters = [...str, '', 'R.'];
console.log(letters);
console.log(...str);

// Spread operator with objects (not iterable by default)
const newRestaurant = { ...restaurant, foundIn: 1988, founder: 'Joshua Rice' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Vinnies';
console.log(restaurantCopy);

/*! Rest Pattern and Parameters
    The rest pattern (...) in JavaScript is used to collect multiple elements or properties
    into a single array or object. It is particularly useful in function parameters to handle
    variable numbers of arguments, as well as in array and object destructuring.
*/

// Destructuring utilizing the Rest Operator
// Spread, because on RIGHT side of = operator
const arr1 = [1, 2, 3, ...[4, 5]];
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others);

const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, Risotto, otherFood);

// Rest Operator In Objects

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// Functions with the Rest Operator

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(numbers);
    console.log(sum);
  }
};
add(2, 3);
add(5, 6, 7, 8);
add(8, 6, 4, 3, 2, 1);

const x1 = [23, 5, 7];
add(...x1);

// Will insert [0] into mainIngredient and the rest of the other ingredients into otherIngredients.
restaurant.orderPizza(
  'cheese',
  'pepperoni',
  'sausage',
  'ham',
  'peppers',
  'onions'
);
// Will insert mainIngredient and make an empty array
restaurant.orderPizza('cheese');

/*! Short-Circuiting with && and || Operators
    Short-circuiting is a feature of logical operators && (AND) and || (OR) in JavaScript.
    It allows the evaluation to stop as soon as the result is determined, which can be used
    to simplify code and avoid unnecessary computations.

    || (OR) Operator 
        The || operator returns the first truthy value it encounters or the last value if none are truthy. It is often used to provide default values.
        
        Short-Circuiting with ||
            If the first operand is truthy, the second operand is not evaluated.
            If the first operand is falsy, the second operand is evaluated and returned.

    && (AND) Operator
        The && operator returns the first falsy value it encounters or the last value if none are falsy. It is often used for conditional execution.

        Short-Circuiting with &&
            If the first operand is falsy, the second operand is not evaluated.
            If the first operand is truthy, the second operand is evaluated and returned.

    Key Points:

        || Operator:

            Returns the first truthy value or the last value if none are truthy.
            Useful for providing default values and finding the first truthy value.

        && Operator:

            Returns the first falsy value or the last value if none are falsy.
            Useful for conditional execution and finding the first falsy value.

    Short-circuiting with && and || operators is a powerful feature in JavaScript that can simplify
    code, make it more readable, and avoid unnecessary computations by stopping the evaluation as soon
    as the result is determined.

*/

// Use Any data type, return any data type, short-circuiting
// Truthy Values = Non-zero Numbers, Non-Empty Strings, Objects, Arrays, Boolean (True), Non-Null Symbols
// Falsy Values = False, 0, empty strings, null, undefined, Nan

console.log(`---- OR ---- Short Circuiting`);
console.log(3 || 'Joshua');
console.log('' || 'Joshua');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuest = 23; // ,- comment this code out to see the short-circuiting take effect.
const guest = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

// Opposite of OR Operator and will return a Falsy
console.log(`---- AND ---- Short Circuiting`);
console.log(0 && 'Joshua');
console.log(7 && 'Joshua');
console.log(7 && 'Joshua' && null && 'Hello');

if (restaurant.orderPizza) {
  restaurant.orderPizza('cheese', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('cheese', 'sausage');
