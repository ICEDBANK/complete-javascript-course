'use strict';

/*!Summary

    Array destructuring in JavaScript allows you to unpack values from arrays into distinct variables in a
    clean and readable way. It can be used for simple extraction, skipping elements, setting default values,
    handling nested arrays, swapping variables, and working with function returns.

    This feature enhances the expressiveness of your code and reduces the need for repetitive and verbose statements.

*/

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // <- You want to return an array of values from Different parameters depending on the index (in this case)
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

const arr = [2, 3, 4, 5];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];

const [w, x, y, z] = arr; // Destructoring assignment
console.log(w, x, y, z);

let [main, , secondary] = restaurant.categories; // You can hop or skip
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]; // utilizing destructoring we are reorganizing the values within the parameter of categories within the object restaurant
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(`${starter}, and ${mainCourse}`);

const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
