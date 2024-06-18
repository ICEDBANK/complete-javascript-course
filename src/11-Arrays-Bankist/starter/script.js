'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Instead of working with Global variables pass into functions
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (move, i) {
    const type = move > 0 ? 'deposit' : 'withdrawal';

    const html = ` 
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } : ${type}</div>
          <div class="movements__value">${move}</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);

const calcPrintBalance = function (movements) {
  const balance = movements.reduce(function (acc, curr) {
    acc + curr;
  }, 0);
  console.log(`<---- ${balance} ----> `);
};

calcPrintBalance(...account4.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [
  200.2, 450.75, -400.86, 3000.2, -650.22, -130.359, 70.0, 1300.4561,
];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log(...arr);

// Splice Array Method
//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// Reverse

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//Concat Array Method

const letters = arr.concat(arr2);
console.log(letters);

// Join Array Method
console.log(letters.join(' - '));

const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

// Getting last array element
console.log(arr3[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr3.at(-1));

console.log(`joshua`.at(-1));

// forEach Loop
let rice = ['Joshua', 'Sarah', 'Ava', 'Adeline'];

rice.forEach(function (family, index) {
  console.log(`${index + 1}: ${family} Rice`);
});

let bankBalance = 0;

movements.forEach(function (transactions, index, array) {
  transactions > 0
    ? console.log(
        `${index + 1}: You Deposited : ${transactions}`,
        (bankBalance += transactions),
        `Your Balance is :${bankBalance} : ${array[index]}`
      )
    : console.log(
        `${index + 1}: You Charged : ${transactions}`,
        (bankBalance += transactions),
        `Your Balance is :${bankBalance} ${array[index]}`
      );
});

// Map is an array of arrays with key value pairs
rice = new Map([
  ['Joshua', 36],
  ['Sarah', 35],
  ['Ava', 6],
  ['Adeline', 2],
]);

rice.forEach(function (value, key) {
  console.log(`The Rice Family consist of ${key} at age ${value}`);
});

console.log('Hello' instanceof String);

currencies.forEach(function (value, key) {
  console.log(`${value} : ${key}`);
});

// forEach Sets
const currencyUnique = new Set(['USD', 'Rpl', 'Yen']);

currencyUnique.forEach(function (value) {});

// map function Call not to be confused with the Map data structure

rice = ['Joshua', 'Sarah', 'Ava', 'Adeline'];
rice.map(function (x) {
  let pass = x;
  console.log(`Hello ${pass}`);
});

// Functional programming paradigm in practice

// const conversion = movements.map(function (x = 0) {
//   x = Math.round(x * 1.1 * 100) / 100;
//   return x;
// });

const conversion = movements.map(x => Math.round(x * 1.1 * 100) / 100);

console.log(conversion);

// Imperative programming paradigm

const movementsUsdfor = [];
for (const mov of movements) {
  movementsUsdfor.push(Math.round(mov * 1.1 * 100) / 100);
}
console.log(movementsUsdfor);

console.log(`<---- Movements Description Arrow Function ---->`);

const movementsDesc = movements.map((transactions, index) => {
  if (transactions > 0) {
    return (
      `${index + 1}: You Deposited : ${Math.round((transactions * 100) / 100)}`,
      (bankBalance += transactions),
      `Your Balance is :${Math.round((bankBalance * 100) / 100)}`
    );
  } else {
    return (
      `${index + 1}: You Charged : ${Math.round((transactions * 100) / 100)}`,
      (bankBalance += transactions),
      `Your Balance is :${Math.round((bankBalance * 100) / 100)} `
    );
  }
});
console.log(movementsDesc);

console.log(`<---- filter Method ---->`);

const deposit = movements.filter(function (move) {
  return move > 0;
});

console.log(movements);
console.log(deposit);

const depositFor = [];

for (const move of movements) {
  if (move > 0) depositFor.push(move);
}
console.log(depositFor);

const withdrawls = movements.filter(move => move < 0);

console.log(withdrawls);

console.log(`<---- Reduce Method ---->`);

//    Reduce Method accepts two parameters accumulator and current

const roundedBalance = function (sum) {
  console.log((sum = Math.round(sum * 100) / 100));
};

const balanceValue = movements.reduce(function (acc, current) {
  return acc + current;
}, 0);

const totalDeposits = deposit.reduce(function (acc, current) {
  return acc + current;
}, 0);

const totalWithdrawls = withdrawls.reduce(function (acc, current) {
  return acc + current;
}, 0);

roundedBalance(balanceValue);
roundedBalance(totalDeposits);
roundedBalance(totalWithdrawls);

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age,
and stored the data into an array (one array for each). For now, they are just interested in knowing
whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a
puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:

1. 
  Julia found out that the owners of the FIRST and the LAST TWO dogs
  actually have cats, not dogs! So create a shallow copy of Julia's array,
  and remove the cat ages from that copied array (because it's a bad
  practice to mutate function parameters)

2. 
  Create an array with both Julia's (corrected) and Kate's data

3. 
  For each remaining dog, log to the console whether it's an adult
  ("Dog number 1 is an adult, and is 5 years old") or a puppy 
  ("Dog number 2 is still a puppy 🐶")

4.
  Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];
const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

const checkDogs = function (arr1, arr2) {
  const shallowArr1 = arr1.slice(1, -2);
  const shallowArr2 = [...arr2];

  shallowArr1.forEach(function (dogAgg, i) {
    dogAgg >= 3
      ? console.log(
          `Julia's Dog number ${i + 1} is an adult, and is ${dogAgg} years old`
        )
      : console.log(
          `Julia's Dog number ${i + 1} is an puppy, and is ${dogAgg} years old`
        );
  });
  shallowArr2.forEach(function (dogAgg, i) {
    dogAgg >= 3
      ? console.log(
          `Kate's Dog number ${i + 1} is an adult, and is ${dogAgg} years old`
        )
      : console.log(
          `Kate's Dog number ${i + 1} is an puppy, and is ${dogAgg} years old`
        );
  });
};
console.log(`<--- Test Data For Coding Challeng #1 Example 1---->`);
checkDogs(julia, kate);
console.log(`<--- Test Data For Coding Challeng #1 Example 2---->`);
checkDogs(julia2, kate2);

//    Refactoring the Above Code

const checkDogs1 = function (dogsJulia, dogsKate) {
  // Create a shallow copy of Julia's array and remove cat ages (first and last two elements)
  const juliaCorrected = dogsJulia.slice(1, -2);

  // Combine corrected Julia's data with Kate's data
  const allDogs = [...juliaCorrected, ...dogsKate];

  // Iterate over each dog's age in allDogs array
  allDogs.forEach(function (age, i) {
    // Determine if the dog is an adult or a puppy
    const dogType = age >= 3 ? 'adult' : 'puppy';
    const owner = i < juliaCorrected.length ? 'Julia' : 'Kate';

    // Output the result to the console
    console.log(
      `${owner}'s Dog number ${i + 1} is a ${dogType}, and is ${age} years old`
    );
  });
};

// Test Data 1
const julia1 = [3, 5, 2, 12, 7];
const kate1 = [4, 1, 15, 8, 3];
console.log('<--- Test Data For Coding Challenge #1 Example 1 --->');
checkDogs1(julia1, kate1);

// Test Data 2
const julia3 = [9, 16, 6, 8, 3];
const kate3 = [10, 5, 6, 1, 4];
console.log('<--- Test Data For Coding Challenge #1 Example 2 --->');
checkDogs1(julia3, kate3);
