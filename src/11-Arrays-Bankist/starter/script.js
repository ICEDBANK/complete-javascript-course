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

// Array containing all account objects
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

// Function to display account movements (transactions)
const displayMovements = function (movements, sort = false) {
  // Clear previous movements
  containerMovements.innerHTML = '';

  // Sort movements if sort is true, otherwise use original order
  const movementsSort = sort
    ? movements.slice().sort((a, b) => a - b)
    : movements;

  // Create and insert HTML for each movement
  movementsSort.forEach(function (move, i) {
    const type = move > 0 ? 'deposit' : 'withdrawal';

    const html = ` 
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    }: ${type}</div>
        <div class="movements__value">${move}€</div>
      </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Function to calculate and display the balance of the account
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// Function to calculate and display the summary of the account (in, out, interest)
const calcDisplayInSummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `${income}€`;

  const withdrawals = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumOut.textContent = `${Math.abs(withdrawals)}€`;

  const interest = acc.movements
    .filter(move => move > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // Only include interests that are at least 1€
      return int >= 1;
    })
    .reduce((acc, curr) => acc + curr, 0);
  labelSumInterest.textContent = `${Math.round(interest * 100) / 100}€`;
};

// Function to create usernames for each account (based on owner's initials)
const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);

// Update the UI with the account information
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplayInSummary(acc);
};

// Event handler for login button
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent form from submitting

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display welcome message and UI
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

// Event handler for transfer button
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // Transfer money
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

// Event handler for loan button
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add loan movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// Event handler for close account button
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// Event handler for sorting movements
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// Reverse array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// Concat Array Method
const letters = arr.concat(arr2);
console.log(letters);

// Join Array Method
console.log(letters.join(' - '));

const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

// Getting the last array element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

console.log(`joshua`.at(-1));

// forEach Loop
let family = ['Joshua', 'Sarah', 'Ava', 'Adeline'];

family.forEach(function (member, index) {
  console.log(`${index + 1}: ${member} Rice`);
});

// Iterating over movements array with forEach
let bankBalance = 0;

movements.forEach(function (transaction, index, array) {
  if (transaction > 0) {
    console.log(
      `${index + 1}: You Deposited: ${transaction}`,
      (bankBalance += transaction),
      `Your Balance is: ${bankBalance}`
    );
  } else {
    console.log(
      `${index + 1}: You Charged: ${transaction}`,
      (bankBalance += transaction),
      `Your Balance is: ${bankBalance}`
    );
  }
});

// Using forEach with Map
family = new Map([
  ['Joshua', 36],
  ['Sarah', 35],
  ['Ava', 6],
  ['Adeline', 2],
]);

family.forEach(function (value, key) {
  console.log(`The Rice Family consists of ${key} at age ${value}`);
});

// Using forEach with Set
const currencyUnique = new Set(['USD', 'Rpl', 'Yen']);

currencyUnique.forEach(function (value) {
  console.log(`${value}`);
});

// map function (array method)
const greetings = family.map(function (x) {
  console.log(`Hello ${x}`);
});

// Functional programming paradigm in practice
const conversion = movements.map(x => Math.round(x * 1.1 * 100) / 100);
console.log(conversion);

// Imperative programming paradigm
const movementsUsdFor = [];
for (const mov of movements) {
  movementsUsdFor.push(Math.round(mov * 1.1 * 100) / 100);
}
console.log(movementsUsdFor);

// Movements description using map
const movementsDesc = movements.map((transaction, index) => {
  if (transaction > 0) {
    return `${index + 1}: You Deposited: ${
      Math.round(transaction * 100) / 100
    }, Your Balance is: ${
      Math.round((bankBalance += transaction) * 100) / 100
    }`;
  } else {
    return `${index + 1}: You Charged: ${
      Math.round(transaction * 100) / 100
    }, Your Balance is: ${
      Math.round((bankBalance += transaction) * 100) / 100
    }`;
  }
});
console.log(movementsDesc);

// Filter Method
const deposits = movements.filter(move => move > 0);
console.log(deposits);

const depositFor = [];
for (const move of movements) {
  if (move > 0) depositFor.push(move);
}
console.log(depositFor);

const withdrawals = movements.filter(move => move < 0);
console.log(withdrawals);

// Reduce Method
const balanceValue = movements.reduce((acc, current) => acc + current, 0);
const totalDeposits = deposits.reduce((acc, current) => acc + current, 0);
const totalWithdrawals = withdrawals.reduce((acc, current) => acc + current, 0);

const roundedBalance = function (sum) {
  console.log(Math.round(sum * 100) / 100);
};

roundedBalance(balanceValue);
roundedBalance(totalDeposits);
roundedBalance(totalWithdrawals);

// Maximum value in Movements Array
const maxValue = movements.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  movements[0]
);
console.log(maxValue);

// Method Chaining
const eurToUsd = 1.1;
const totalDepositsUsd = movements
  .filter(move => move > 0)
  .map(move => move * eurToUsd)
  .reduce((acc, curr) => acc + curr, 0);
console.log(totalDepositsUsd);

// Find Method
const firstWithdrawal = movements.find(move => move < 0);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

let foundAccount;
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    foundAccount = acc;
    break;
  }
}
console.log(foundAccount);

// Some and Every Method
const riceFamily = [
  { name: 'Joshua', age: 36 },
  { name: 'Sarah', age: 35 },
  { name: 'Ava', age: 6 },
  { name: 'Adeline', age: 2 },
];

const someAdults = riceFamily.some(fam => fam.age > 18);
console.log(someAdults);

const allUnder50 = riceFamily.every(fam => fam.age < 50);
console.log(allUnder50);

const depositCheck = movements.some(dep => dep > 1500);
console.log(depositCheck);

const allPositiveMovements = movements.every(mov => mov > 0);
console.log(allPositiveMovements);

// Separate callback
const deposits = move => move > 0;
console.log(movements.some(deposits));

// flat and flatMap methods
const arr4 = [[[1, 2], 3], [4, [5, 6]], 7, 8];
const arr5 = [[1, 2, 4], [4, 5, 6], 7, 8];

console.log(arr5.flat());
console.log(arr4.flat(2));

// Calculate overall balance using flat
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, move) => acc + move, 0);
console.log(overallBalance);

// Calculate overall balance using flatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, move) => acc + move, 0);
console.log(overallBalance2);

// Sorting Array methods
rice.sort();
console.log(rice);

riceFamily.sort((a, b) => a.age - b.age);
console.log(riceFamily);

// Numbers sorting method
let sortMovements = movements.sort((a, b) => a - b);
console.log(sortMovements);

sortMovements = movements.sort((a, b) => b - a);
console.log(sortMovements);

// More Ways of Creating and Filling Arrays
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);

console.log(x.map(() => 5));
x.fill(1, 3, 5);
console.log(x);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);

// Generating an array of random dice rolls
const dice = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
console.log(dice);

// Convert UI elements to array
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value')
  );
  console.log(movementsUI.map(el => Number(el.textContent.replace('€', ''))));
});

/*!What Array method to use ?

  To Mutate Original Array

    Add to Original:

      .push(end)
      .unshift(start)

    Remove From Original:

      .pop (end)
      .shift (start)
      .splice(any)

    Others:

      .reverse
      .sort
      .fill

  A New Array

    Computed From Original

      .map (loop)

    Filtered using Condition

      .filter

    Position of Original

      .slice
      
    Adding Original to Others

      .concat

    Flattening Original

      .flat
      .flatMap

  An Array Index

    Based on Value

      .indexOf

    Based On Test Condition

      .findIndex

  An Array Element

    Based On Test Condition

      .find

  Know if array included

    Based On Value

      .includes

    Based On Test Condition

      .some
      .every

  A New String

    Based On Separator String

      .join
      
  To Transform to Value

    Based On Accumulator:

      .reduce
        (boils down array to single value of any type: Number, 
        String, boolean, or even new array or object)

    To Just Loop Array

      Based On Callback

        .forEach (Does Not Create A new Array Just loops over it)

*/

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

// Test data for Coding Challenge #1
const julia1 = [3, 5, 2, 12, 7];
const kate1 = [4, 1, 15, 8, 3];
const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

// Function to check dogs' ages and log whether they are adults or puppies
const checkDogs = function (arr1, arr2) {
  // Create a shallow copy of Julia's array and remove the first and last two elements
  const shallowArr1 = arr1.slice(1, -2);

  // Combine the corrected Julia's array with Kate's array
  const allDogs = [...shallowArr1, ...arr2];

  // Log whether each dog is an adult or a puppy
  allDogs.forEach(function (dogAge, i) {
    const owner = i < shallowArr1.length ? 'Julia' : 'Kate';
    dogAge >= 3
      ? console.log(
          `${owner}'s Dog number ${
            i + 1
          } is an adult, and is ${dogAge} years old`
        )
      : console.log(
          `${owner}'s Dog number ${
            i + 1
          } is a puppy, and is ${dogAge} years old`
        );
  });
};

// Run the function with both test datasets
console.log('<--- Test Data For Coding Challenge #1 Example 1 --->');
checkDogs(julia1, kate1);

console.log('<--- Test Data For Coding Challenge #1 Example 2 --->');
checkDogs(julia2, kate2);

// Refactored function for Coding Challenge #1
const checkDogs1 = function (dogsJulia, dogsKate) {
  // Create a shallow copy of Julia's array and remove the first and last two elements
  const juliaCorrected = dogsJulia.slice(1, -2);

  // Combine the corrected Julia's array with Kate's array
  const allDogs = [...juliaCorrected, ...dogsKate];

  // Log whether each dog is an adult or a puppy
  allDogs.forEach(function (age, i) {
    const dogType = age >= 3 ? 'adult' : 'puppy';
    const owner = i < juliaCorrected.length ? 'Julia' : 'Kate';
    console.log(
      `${owner}'s Dog number ${i + 1} is a ${dogType}, and is ${age} years old`
    );
  });
};

// Run the refactored function with both test datasets
console.log('<--- Test Data For Coding Challenge #1 Example 1 --->');
checkDogs1(julia1, kate1);

console.log('<--- Test Data For Coding Challenge #1 Example 2 --->');
checkDogs1(julia2, kate2);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// Test data for Coding Challenge #2
const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

// Function to calculate average human age of dogs
const calcAverageHumanAge = function (ages) {
  // Calculate dog age in human years
  const humanYears = ages.map(dog => (dog <= 2 ? 2 * dog : dog * 4 + 16));
  console.log(`Human Years: ${humanYears}`);

  // Filter out dogs that are less than 18 human years old
  const adultDogs = humanYears.filter(dog => dog >= 18);
  console.log(`Filtered Years: ${adultDogs}`);

  // Calculate the average human age of all adult dogs
  const average =
    adultDogs.reduce((acc, curr) => acc + curr, 0) / adultDogs.length;
  return Math.round(average * 100) / 100;
};

// Run the function for both test datasets
console.log(calcAverageHumanAge(testData1));
console.log(calcAverageHumanAge(testData2));

// Refactored function for Coding Challenge #2
const calcAverageHumanAge1 = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : age * 4 + 16));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges, adults);
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
};
console.log(calcAverageHumanAge1(testData1));
console.log(calcAverageHumanAge1(testData2));

// Simplified function for Coding Challenge #2 using arrow functions and chaining
const calcAverageHumanAge2 = ages =>
  ages
    .map(dog => (dog <= 2 ? dog * 2 : dog * 4 + 16))
    .filter(dog => dog >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);

console.log(calcAverageHumanAge2(testData1));
console.log(calcAverageHumanAge2(testData2));
