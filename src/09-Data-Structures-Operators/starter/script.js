'use strict';

/*!Summary

    Array destructuring in JavaScript allows you to unpack values from arrays into distinct variables in a
    clean and readable way. It can be used for simple extraction, skipping elements, setting default values,
    handling nested arrays, swapping variables, and working with function returns.

    This feature enhances the expressiveness of your code and reduces the need for repetitive and verbose statements.

*/

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // <- You want to return an array of values from Different parameters depending on the index (in this case)
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const arr = [2, 3, 4, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const d = arr[3];

// const [w, x, y, z] = arr; // Destructoring assignment
// console.log(w, x, y, z);

// let [main, , secondary] = restaurant.categories; // You can hop or skip
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main]; // utilizing destructoring we are reorganizing the values within the parameter of categories within the object restaurant
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(`${starter}, and ${mainCourse}`);

// const nested = [2, 4, [5, 6]]; // Destructoring a Nested Array Example
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //    Default values

// const [p = 1, q = 1, r = 'end'] = [8, 9];
// console.log(p, q, r);

// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: [
//       'computer science',
//       'programming',
//       'algorithms',
//       'data structures',
//       'java',
//       'math',
//       'software',
//       'engineering',
//     ],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: [
//       'Harold Abelson',
//       'Gerald Jay Sussman',
//       'Julie Sussman (Contributor)',
//     ],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: [
//       'computer science',
//       'programming',
//       'javascript',
//       'software',
//       'engineering',
//     ],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Computer Systems: A Programmer's Perspective",
//     author: ['Randal E. Bryant', "David Richard O'Hallaron"],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: [
//       'computer science',
//       'computer systems',
//       'programming',
//       'software',
//       'C',
//       'engineering',
//     ],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: [
//       'computer science',
//       'operating systems',
//       'programming',
//       'software',
//       'C',
//       'Java',
//       'engineering',
//     ],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65,
//       },
//     },
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090,
//       },
//     },
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: [
//       'computer science',
//       'compilers',
//       'engineering',
//       'interpreters',
//       'software',
//       'engineering',
//     ],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0,
//       },
//     },
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808,
//       },
//     },
//     highlighted: true,
//   },
// ];

// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// const [, , thirdBook] = books;
// console.log(thirdBook);

// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);

// //  Below is the nested ratings array that contains two other arrays. Destructure the nested ratings
// //  arrays into two variables called rating and ratingsCount. In the result of your destructuring, the
// //  ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// /*

//   Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings
//   and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.

//   const [p = 1, q = 1, r = 'end'] = [8, 9];
//   console.log(p, q, r);

// */
// const ratingStars = [63405, 1808];
// const [fiveStarRating, oneStarRatings, threeStarRatings = 0] = ratingStars;

// console.log(fiveStarRating, oneStarRatings, threeStarRatings);

/*! Object Destructioring Summary

Object destructuring in JavaScript allows you to unpack properties from objects into distinct variables
in a clean and readable way. It can be used for simple extraction, renaming variables, setting default values,
handling nested objects, and working directly with function parameters and returns.

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

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
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

restaurant.orderDelivery({
  time: '22:30',
  address: '123 Abc Street',
  mainIndex: 2,
  starterIndex: 2,
});

// Extracts name, openingHours, and categories from the restaurant object. The order of properties in the object does not matter.

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//  Renames name to restaurantName, openingHours to hours, and categories to tags. This is useful for
//  avoiding naming conflicts or improving code readability.

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Provides default values ([] for both menu and starters) in case those properties do not
// exist in the restaurant object. This is particularly useful when working with data from APIs
// where the presence of certain properties is not guaranteed.

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables while Objects destructuring

let a = 111;
let b = 222;

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested Objects

const {
  fri: { open = opt, close = cle },
} = openingHours;
console.log(opt, cle);
