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

const WEEKDAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [WEEKDAYS[3]]: {
    open: 12,
    close: 22,
  },
  [WEEKDAYS[4]]: {
    open: 11,
    close: 23,
  },
  [WEEKDAYS[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literal
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // Returning an array of values based on the provided indexes
  },
  orderDelivery({ starterIndex = 0, mainIndex = 1, time = '20:00', address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
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
const { name, openingHours1, categories } = restaurant;
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
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

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

/*! Nullish Coalescing Operator ??

        The nullish coalescing operator (??) is a feature in JavaScript that allows
        you to provide a default value when dealing with null or undefined. It is
        particularly useful for handling cases where null or undefined values might
        appear, and you want to ensure a fallback value is used instead.

    How It Works
   
            The nullish coalescing operator checks if the left-hand side (value) is either
            null or undefined. If it is, it returns the right-hand side (defaultValue). If
            it is not, it returns the left-hand side (value).

                let user = null;
                let defaultUser = "Guest";
                let currentUser = user ?? defaultUser;

                console.log(currentUser); // "Guest"
    
    Conclusion
    
        The nullish coalescing operator (??) in JavaScript provides a concise and precise way
        to handle null and undefined values by allowing you to specify a default value. It is
        particularly useful for cases where you want to distinguish between null/undefined and
        other falsy values, ensuring that valid falsy values like 0 and "" are not incorrectly
        overridden.   

*/

restaurant.numGuest = 0;
const guest = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest);

// Nullish: null and undefined (NOT 0 or '')
const guessCorrect = restaurant.numGuest ?? 10;
console.log(guessCorrect);

/*! Logical Assignment Operators in JavaScript

        Logical assignment operators combine logical operators (||, &&, ??) with assignment.
        They provide a shorthand way to apply a logical operation and assign the result to
        a variable. These operators make code more concise and readable.

    Types of Logical Assignment Operators
   
        Logical OR Assignment (||=)
        Logical AND Assignment (&&=)
        **Nullish Coalescing Assignment (??=)

    Logical OR Assignment (||=)
    
        The logical OR assignment operator (||=) assigns a value to a variable if the variable
        is falsy. Falsy values include false, 0, "", null, undefined, and NaN.

            let a = 0;
                a ||= 10;
                console.log(a); // 10

                let b = '';
                b ||= 'default';
                console.log(b); // 'default'

                let c = null;
                c ||= 'fallback';
                console.log(c); // 'fallback'

                let d = 'initial';
                d ||= 'new';
                console.log(d); // 'initial'

    Logical AND Assignment (&&=)
    
        The logical AND assignment operator (&&=) assigns a value to a variable if the variable is truthy.

            let a = true;
                a &&= false;
                console.log(a); // false
                
            let b = 1;
                b &&= 2;
                console.log(b); // 2

            let c = null;
                c &&= 'fallback';
                console.log(c); // null

            let d = 'initial';
                d &&= 'new';
                console.log(d); // 'new'

    Logical AND Assignment (&&=)
    
        The logical AND assignment operator (&&=) assigns a value to a variable if the variable is truthy.

            let a;
                a ??= 10;
                console.log(a); // 10

            let b = null;
                b ??= 'default';
                console.log(b); // 'default'

            let c = undefined;
                c ??= 'fallback';
                console.log(c); // 'fallback'

            let d = '';
                d ??= 'new';
                console.log(d); // ''


    Logical OR Assignment (||=): Assigns a value if the variable is falsy.
    Logical AND Assignment (&&=): Assigns a value if the variable is truthy.
    Nullish Coalescing Assignment (??=): Assigns a value if the variable is null or undefined.

    These logical assignment operators provide a concise way to handle common programming patterns,
    making your code more readable and reducing the need for more verbose conditional statements.  

*/

const rest1 = {
  name: 'Vinnies',
  numGuest: 0,
};

const rest2 = {
  name: 'Italian Delight',
  owner: 'Vinny',
};

// rest2.numbGuest = rest2.numGuest || 10;
// rest1.numbGuest = rest1.numGuest || 10;

// OR ( Falsy ) assignment operator

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// nullish assignment operator ( null or undefined )

rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

rest2.owner &&= '<ANONYMOUS>';
rest1.ownder &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

/*! Looping Arrays: The for-of Loop

        The for...of loop is a modern and concise way to iterate over iterable objects in
        JavaScript, such as arrays, strings, maps, sets, and more. It allows you to loop
        through the values of an iterable object without having to manage the loop counter
        manually.

            Example 1:

                for (const element of iterable) {
                // Code to be executed for each element
                }

            Explanation:

                element: The variable that holds the value of the current element in the iteration.
                iterable: The object that you want to iterate over.

            Example 2 ( Array ):

                const fruits = ['apple', 'banana', 'cherry'];

                for (const fruit of fruits) {
                console.log(fruit);

            Explanation:

                In this example, the for...of loop iterates over each element in the fruits array,
                logging each fruit to the console.

            Example 3 ( String ): 

                const greeting = 'hello';

                for (const char of greeting) {
                console.log(char);
                }

            Explanation:

                Here, the for...of loop iterates over each character in the greeting string, logging each character to the console.
            

        Analogy:

            Imagine you are reading a book. The book has many pages, and you want to read through each page one by one.

            Book: The iterable object (e.g., an array or string).
            Page: Each element in the iterable object.
            Reading: The action you perform on each element (e.g., logging to the console or processing data).
            Using a for...of loop is like flipping through each page of the book automatically, one by one, without
            needing to know the total number of pages or keeping track of the page number.            


*/

// Create a new array 'menu1' by combining 'starterMenu' and 'mainMenu' from the 'restaurant' object using the spread operator
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Iterate over each item in 'menu1' and log it to the console
for (const item of menu1) {
  console.log(item);
}

// Use 'menu1.entries()' to get an iterator with index-value pairs, and log each pair to the console
for (const [i, el] of menu1.entries()) {
  console.log(`${i + 1}: ${el}`);
}

/*! Enhanced Object Literals in JavaScript

        Enhanced object literals in JavaScript provide a shorthand syntax and new features
        that make it easier to create objects and work with them. These enhancements were introduced
        in ES6 (ECMAScript 2015) and make the code more concise and readable.

                Key Features:

                    Property Shorthand
                    Method Definitions
                    Computed Property Names
                    Property Value Shorthand

            Example 1 ( Property Shorthand ):

                const name = 'Alice';
                const age = 30;

                const person = {
                name,
                age,
                };

                console.log(person); // { name: 'Alice', age: 30 }

            Explanation:

                When the variable name and the property name are the same, you can omit the property name.

            Example 2 ( Method Definitions ):

                const person = {
                name: 'Alice',
                greet() {
                    console.log('Hello!');
                },
                };

                person.greet(); // Hello!

            Explanation:

                You can define methods in objects without the function keyword.

            Example 3 ( Computed Property Names ): 

                const propName = 'status';

                const order = {
                id: 1,
                [propName]: 'shipped',
                };

                console.log(order); // { id: 1, status: 'shipped' }

            Explanation:

                You can use expressions in square brackets to compute property names dynamically.
                        
                    Example 3 ( Property Value Shorthand ): 

                        const name = 'Alice';
                        const age = 30;

                        const person = {
                        name: name,
                        age: age,
                        };

                        console.log(person); // { name: 'Alice', age: 30 }

            Explanation:

                The property value shorthand allows you to omit the property value if it matches the variable name.
            

        Analogy:

            Imagine you are filling out a form with your personal information. With enhanced object literals,
            it's like having an auto-fill feature that automatically fills in your information based on the variable
            names, and you can dynamically create new fields based on your inputs. 

                        
            ( *** SEE OPENINGHOURS / RESTAURANT OBJECT STARTING ON LINE 16 *** )

*/
/*! Optional Chaining in JavaScript

        Optional chaining (?.) is a feature in JavaScript that allows you to safely access deeply
        nested properties in objects without having to manually check if each reference in the chain
        is valid (not null or undefined). If any part of the chain is null or undefined, the entire
        expression short-circuits and returns undefined.

                Syntax:

                  object?.property
                  object?.[expression]
                  object?.method?.()


            Example 1 ( Accessing Nested Properties ):

              const user = {
                name: 'Alice',
                address: {
                  city: 'Wonderland',
                },
              };

              // Without optional chaining
              const city = user && user.address && user.address.city; // 'Wonderland'

              // With optional chaining
              const city = user?.address?.city; // 'Wonderland'


            Explanation:

                The optional chaining operator ?. checks each step in the chain. If
                user, user.address, or user.address.city is null or undefined, it returns undefined
                instead of throwing an error.

            Example 2 ( Accessing Methods ):

              const user = {
                name: 'Alice',
                greet: () => 'Hello!',
              };

              // Without optional chaining
              const greeting = user && user.greet && user.greet(); // 'Hello!'

              // With optional chaining
              const greeting = user?.greet?.(); // 'Hello!'


            Explanation:

                The ?. operator can also be used to safely call methods. If user or user.greet is null or
                undefined, it returns undefined instead of calling the method.

            Example 3 ( Accessing Array Elements ): 

                const users = [
                  { name: 'Alice' },
                  { name: 'Bob' },
                ];

                // Without optional chaining
                const secondUserName = users && users[1] && users[1].name; // 'Bob'

                // With optional chaining
                const secondUserName = users?.[1]?.name; // 'Bob'


            Explanation:

        Analogy:

          Think of optional chaining like a series of doors in a hallway. You want to get to the room at the end,
          but if any door in the hallway is locked (null or undefined), you stop and don't proceed further.

          Without Optional Chaining: You have to check if each door is unlocked before proceeding to the next one.
          With Optional Chaining: You walk through the hallway, and if you encounter a locked door, you stop and
          know that you can't get to the room at the end, but you don't cause a commotion (error).
            
                        
        Practical Use Cases:
                        
          1. Fetching Data from APIs:
        
            fetch('https://api.example.com/user')
              .then(response => response.json())
              .then(data => {
                const userName = data?.user?.name;
                console.log(userName); // undefined if data.user or data.user.name is null or undefined
              });

          2. Handling Optional Configurations:
          
            const config = {
              settings: {
                theme: 'dark',
              },
            };

            const theme = config?.settings?.theme ?? 'default';
            console.log(theme); // 'dark'

          Self-Teaching : 

            const firstName = 'Joshua';
            const lastName = 'Rice';
            const age = 0;
            const yearBorn = 1988;
            const streetAddress = '111 Church Street';
            const city = 'birdsboro';

            const person = {
              name: [firstName, lastName],
              age() {
                return 2024 - this.yearBorn;
              },
              yearBorn,
              address: {
                streetAddress,
                city,
              },
            };
            // Without Operational Chaining
              //const town = person && person.address.city;
            // With Operational Chaining
              const town = person?.address?.streetAddress;
              console.log(town);
              const personAge = person?.age?.();
              console.log(personAge);
              const secondUserName = person?.name[0]?.firstName;
              console.log(person.name[0]);
          

*/

// if (restaurant.openingHours && restaurant.openingHours.mon.open)
//   console.log(restaurant.openingHours.mon.open);

// WITH Optional Chaining
console.log(restaurant?.openingHours?.mon?.open);
console.log(restaurant?.openingHours?.fri?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
console.log(days);
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Method Optional Chaining
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// Arrays Optional Chaining
const users = [
  {
    name: 'Joshua',
    email: 'j.e.rice4101@gmail.com',
  },
];

console.log(users[0]?.name ?? 'users Array Empty');

/*! Optional Chaining in JavaScript

        JavaScript provides several ways to loop through the properties of an object.
        The most common methods are using Object.keys(), Object.values(), and Object.entries().
        These methods allow you to access the keys, values, and key-value pairs of an object,
        respectively.

              Object.keys()

                Syntax (keys):

                  Object.keys(obj);

                Example 1

                  const person = {
                    name: 'Alice',
                    age: 25,
                    city: 'Wonderland'
                  };

                  const keys = Object.keys(person);
                  console.log(keys); // ["name", "age", "city"]

                  // Looping through keys
                  for (const key of keys) {
                    console.log(key); // Logs "name", "age", "city"
                  }

                Explanation:

                  Object.keys() returns an array of a given object's property names (keys)

          Object.values()

            Syntax:

                  Object.values(obj);

                    const person = {
                      name: 'Alice',
                      age: 25,
                      city: 'Wonderland'
                    };

                    const values = Object.values(person);
                    console.log(values); // ["Alice", 25, "Wonderland"]

                    // Looping through values
                    for (const value of values) {
                      console.log(value); // Logs "Alice", 25, "Wonderland"
                    }

            Explanation:

                Object.values() returns an array of a given object's property values.

          Object.entries()

            Syntax:

                  Object.entries(obj);

                    const person = {
                      name: 'Alice',
                      age: 25,
                      city: 'Wonderland'
                    };

                    const entries = Object.entries(person);
                    console.log(entries); // [["name", "Alice"], ["age", 25], ["city", "Wonderland"]]

                    // Looping through entries
                    for (const [key, value] of entries) {
                      console.log(`${key}: ${value}`); // Logs "name: Alice", "age: 25", "city: Wonderland"
                    }

            Explanation:

                Object.entries() returns an array of a given object's own enumerable property [key, value] pairs.

        Analogy:

          Imagine you have a filing cabinet where each drawer has a label (key) and contains some documents (values).

            Object.keys(): This is like listing all the labels on the drawers.
            Object.values(): This is like taking out all the documents from the drawers and listing them.
            Object.entries(): This is like opening each drawer and seeing both the label and the documents
            inside, noting each label and its corresponding documents.
            
                        
        Practical Use Cases:
                        
          1. Iterating Over Form Data:
        
              const formData = {
                username: 'user123',
                password: 'pass123',
                email: 'user@example.com'
              };

              Object.keys(formData).forEach(key => {
                console.log(`${key}: ${formData[key]}`);
              });

          2. Transforming Objects:
          
              const data = {
                firstName: 'John',
                lastName: 'Doe',
                city: 'New York'
              };

              const transformedData = Object.fromEntries(
                Object.entries(data).map(([key, value]) => [key, typeof value === 'string' ? value.toUpperCase() : value])
              );

              console.log(transformedData); // { firstName: 'JOHN', lastName: 'DOE', city: 'NEW YORK' }

          Self-Teaching : 
            
            const firstName = 'Joshua';
            const lastName = 'Rice';
            const age = 0;
            const yearBorn = 1988;
            const streetAddress = '111 Church Street';
            const city = 'Birdsboro';

            const person = {
              name: [firstName, lastName],
              age() {
                return 2024 - this.yearBorn;
              },
              yearBorn,
              address: {
                streetAddress,
                city,
              },
            };

            // Safely accessing 'streetAddress' using optional chaining
            const town = person?.address?.streetAddress;
            console.log(town); // Output: '111 Church Street'

            // Safely calling 'age' method using optional chaining
            const personAge = person?.age?.();
            console.log(personAge); // Output: 36

            // Incorrect use: 'firstName' is not a property of a string
            const secondUserName = person?.name[0]?.firstName;
            console.log(secondUserName); // Output: undefined (since 'firstName' is not a property of a string)

            // Correct access to the first element of 'name' array
            console.log(person.name[0]); // Output: 'Joshua'

            // Getting all keys of 'person' object
            const keys = Object.keys(person);
            for (const key of keys) {
              console.log(`${key} `); // Output: each key of the 'person' object
            }

            // Getting all values of 'person' object
            const values = Object.values(person);
            for (const value of values) {
              console.log(value); // Output: each value of the 'person' object
            }

            // Getting all entries (key-value pairs) of 'person' object
            const entries = Object.entries(person);
            for (const [key, value] of entries) {
              console.log(`${key}: ${value}`); // Output: each key-value pair of the 'person' object
            }
          

*/

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open ${properties.length} days, `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

// key, value
for (const [key, { open, close }] of entries)
  console.log(`On: ${key} we open at ${open} and close at ${close}`);

/*! Sets in JavaScript

        A Set is a built-in JavaScript object that allows you to store unique values
        of any type, whether primitive values or object references. This means that
        each value in a Set can only occur once.

        Key Features of Sets:

          Unique Values: A Set automatically removes duplicate values.
          Order: Values in a Set are ordered by the insertion order.
          Iterability: You can iterate over the elements of a Set in the order of insertion.

              Basic Syntax:

                // iterable: An iterable object whose elements are added to the new Set. If this parameter is not specified, an empty Set is created.
                const mySet = new Set([iterable]);

                Creating A Set:

                  const set1 = new Set();
                  const set2 = new Set([1, 2, 3, 4, 4, 4]);
                  console.log(set2); // Set { 1, 2, 3, 4 }

                Adding and Deleting Elements:
                  
                  Adding Elements: Use the add() method.
                  Deleting Elements: Use the delete() method.

                    const mySet = new Set();
                    mySet.add(1);
                    mySet.add(5);
                    mySet.add(5); // Duplicate values are ignored
                    mySet.add('Hello');
                    mySet.delete(1);
                    console.log(mySet); // Set { 5, 'Hello' }

                  Checking for Elements:

                    Checking Existence: Use the has() method.
                    Size of the Set: Use the size property.

                        const mySet = new Set([1, 2, 3]);
                        console.log(mySet.has(1)); // true
                        console.log(mySet.has(5)); // false
                        console.log(mySet.size); // 3

                  Iterating Over a Set:

                    Using for...of Loop:

                      const mySet = new Set(['a', 'b', 'c']);
                        for (const item of mySet) {
                          console.log(item);
                        }
                        // Output:
                        // a
                        // b
                        // c

                    Using forEach Method:

                        mySet.forEach((value) => {
                            console.log(value);
                          });
                          // Output:
                          // a
                          // b
                          // c

                  Removing All Elements:
                          
                    Using clear() Method:

                    const mySet = new Set([1, 2, 3]);
                      mySet.clear();
                      console.log(mySet.size); // 0

                  Real-World Analogy

                      Imagine you have a guest list for a party. You want to make sure that each person is invited only once,
                      and you want to easily check if someone is already on the list.

                        Guest List: The Set.
                        Adding a Guest: Using the add() method to add a guest to the list.
                        Checking the List: Using the has() method to see if someone is already on the list.
                        Removing a Guest: Using the delete() method to remove a guest from the list.
                        Clearing the List: Using the clear() method to remove all guests from the list.

                  Practical Examples:      
                            
                    Removing Duplicates of an Array

                        const numbers = [1, 2, 3, 3, 4, 4, 5];
                        const uniqueNumbers = [...new Set(numbers)];
                        console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

                    Storing Unique Values:

                        const visitedPages = new Set();
                        visitedPages.add('home');
                        visitedPages.add('about');
                        visitedPages.add('home'); // Duplicate value, will be ignored
                        console.log(visitedPages); // Set { 'home', 'about' }

                    Efficient Lookup of Unique Values:

                        const uniqueIds = new Set([1, 2, 3]);
                        console.log(uniqueIds.has(2)); // true
                        console.log(uniqueIds.has(4)); // false

*/

const ordersSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pizza', 'Pasta']);

console.log(ordersSet);
console.log(new Set('Joshua'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//Example
const staff = [
  'Waiter',
  'Chef',
  'Waiter',
  'Manager',
  'Chef',
  'Waiter',
  'Hostess',
  'Line Cook',
];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('JoshuaRice').size);

/*! Maps in JavaScript

        A Map is a built-in JavaScript object that allows you to store key-value pairs. Unlike regular
        objects, Maps can use any value (object or primitive) as a key. This makes Maps a more versatile
        and powerful way to handle collections of data.

        Key Features of Maps:

          1. Key-Value Pairs: Stores data as key-value pairs.
          2. Any Value as Key: Keys can be any value, including functions, objects, or any primitive.
          3. Order of Elements: Elements in a Map are ordered by their insertion order.
          4. Size Property: The number of key-value pairs is easily accessible through the size property.
          5. Iterability: You can iterate over the key-value pairs in a Map.

        Basic Syntax:

          // iterable: An array or any other iterable object whose elements are arrays (with a key-value pair for each entry).
          const myMap = new Map([iterable]);

        Creating a Map:

          const map1 = new Map();
          const map2 = new Map([
            ['key1', 'value1'],
            ['key2', 'value2'],
          ]);
          console.log(map2); // Map { 'key1' => 'value1', 'key2' => 'value2' }

        Adding and Deleting Elements:

          Adding Elements: Use the set() method.
          Deleting Elements: Use the delete() method.

          const myMap = new Map();
          myMap.set('key1', 'value1');
          myMap.set('key2', 'value2');
          console.log(myMap); // Map { 'key1' => 'value1', 'key2' => 'value2' }

          myMap.delete('key1');
          console.log(myMap); // Map { 'key2' => 'value2' }

        Checking for Elements:

          Checking Existence: Use the has() method.
          Size of the Map: Use the size property.

          const myMap = new Map([
            ['key1', 'value1'],
            ['key2', 'value2'],
          ]);
          console.log(myMap.has('key1')); // true
          console.log(myMap.has('key3')); // false
          console.log(myMap.size); // 2

        Accessing Elements:

          Getting Values: Use the get() method.
          
          const myMap = new Map([
            ['key1', 'value1'],
            ['key2', 'value2'],
          ]);
          console.log(myMap.get('key1')); // 'value1'
          console.log(myMap.get('key3')); // undefined

        Iterating Over a Map:

          Using for...of Loop:
          
            const myMap = new Map([
              ['key1', 'value1'],
              ['key2', 'value2'],
            ]);
            for (const [key, value] of myMap) {
              console.log(`${key}: ${value}`);
            }
            // Output:
            // key1: value1
            // key2: value2
          
          Using forEach Method:
          
            myMap.forEach((value, key) => {
              console.log(`${key}: ${value}`);
            });
            // Output:
            // key1: value1
            // key2: value2

        Removing All Elements:

          Using clear() Method:
          
          const myMap = new Map([
            ['key1', 'value1'],
            ['key2', 'value2'],
          ]);
          myMap.clear();
          console.log(myMap.size); // 0

        Real-World Analogy:

          Imagine you have a directory where each person (key) has an associated phone number
          (value). You can look up the phone number using the person's name.

          Directory: The Map.
          Adding a Contact: Using the set() method to add a key-value pair (person-phone number).
          Looking Up a Phone Number: Using the get() method to find the phone number for a specific person.
          Checking if a Contact Exists: Using the has() method to see if a person is in the directory.
          Deleting a Contact: Using the delete() method to remove a person from the directory.
          Clearing the Directory: Using the clear() method to remove all contacts.

        Practical Use Cases:

          Storing Configuration Settings:        

            const config = new Map();
            config.set('theme', 'dark');
            config.set('version', '1.2.0');
            console.log(config.get('theme')); // 'dark'

          Tracking Elements in a Collection:

            const fruitCount = new Map();
            fruitCount.set('apple', 5);
            fruitCount.set('banana', 3);
            console.log(fruitCount.get('apple')); // 5

          Caching Results:

            const cache = new Map();
            function fetchData(key) {
              if (cache.has(key)) {
                return cache.get(key);
              } else {
                const result = // some expensive computation;
                cache.set(key, result);
                return result;
              }
            }        

        Summary:

          Creation: Use new Map() to create a map.
          Adding Elements: Use set() method.
          Deleting Elements: Use delete() method.
          Checking Existence: Use has() method.
          Accessing Elements: Use get() method.
          Size: Use size property.
          Iterating: Use for...of loop or forEach() method.
          Clearing: Use clear() method.   
          
        personal code:

          const riceFamily = new Map([
            ['dad', 'Joshua'],
            ['mom', 'Sarah'],
            ['daughterOne', 'Ava'],
            ['daughtertwo', 'Adeline'],
            ['dogOne', 'Simba'],
            ['dogtwo', 'Maverick'],
          ]);

          console.log(riceFamily);
          riceFamily.set('Property', '111 Church Street');
          console.log(riceFamily);
          console.log(riceFamily.get('dad'));
          for (const [key, value] of riceFamily) console.log(`${key}: ${value}`);

*/

const rest = new Map([
  ['name', 'Vinnies'],
  ['location', 'Birdsboro'],
]);

rest
  .set('categories', ['Itaiian', 'Pizzeria', 'Vegeterian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name', true));

for (const [key, value] of rest) {
  console.log(`${key}: ${value}`);
}
