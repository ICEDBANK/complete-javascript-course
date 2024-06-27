'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// Different data! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5, // %
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

// Array containing all accounts
const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements

// Selecting DOM elements
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

/////////////////////////////////////////////////
// Functions

// Function to display account movements (transactions)
const formatMovementDate = function (date) {
  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();

  const calcDatePassed = (date1, date2) =>
    (date2 - date1) / (1000 * 60 * 60 * 24);
};

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // Clear previous movements

  // Sort movements if required
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  // Generate HTML for each movement and insert into container
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Function to calculate and display the balance of the account
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

// Function to calculate and display the summary (incomes, outgoings, interest)
const calcDisplaySummary = function (acc) {
  // Calculate incomes
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  // Calculate outgoings
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  // Calculate interest
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1) // Only include interest >= 1€
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

// Function to create usernames for each account (based on owner's initials)
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

// Function to update the UI with account information
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// Login event handler
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Find the account by username
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  // Verify PIN
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display welcome message and UI
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

// Transfer event handler
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  // Clear input fields
  inputTransferAmount.value = inputTransferTo.value = '';

  // Validate transfer conditions
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Perform the transfer
    currentAccount.movements.push(Math.round(-amount * 100) / 100);
    receiverAcc.movements.push(Math.round(amount * 100) / 100);

    // Update UI
    updateUI(currentAccount);
  }
});

// Loan event handler
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  // Validate loan conditions (at least one deposit with 10% of the requested loan amount)
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add loan movement
    currentAccount.movements.push(Math.round(amount * 100) / 100);

    // Update UI
    updateUI(currentAccount);
  }

  // Clear input field
  inputLoanAmount.value = '';
});

// Close account event handler
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  // Validate close account conditions
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  // Clear input fields
  inputCloseUsername.value = inputClosePin.value = '';
});

// Sort movements event handler
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

console.log(23 === 23.0);
console.log(0.1 + 0.2);

// String Conversion
console.log(Number('23'));
console.log(+`23`);

//Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));

// Checking If Value Is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20px'));
console.log(Number.isNaN(32 / 0));

// Checking If Value Is A Number
console.log(Number.isFinite(20));
console.log(Number.isFinite(32 / 0));

//Math Namespace
console.log(Math.sqrt(25));
console.log(25 ** (1 / 3));
console.log(Math.max(5, 18, 23, '11', 2));
console.log(Math.max(5, 18, '23px', '11', 2));
console.log(Math.min(5, 18, 23, '11', 2));
console.log(Math.min(5, 18, '23px', '11', 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

// Rounding Interegers
console.log(Math.trunc(23.4));
console.log(Math.round(23.9));
console.log(Math.ceil(23.9));
console.log(Math.ceil(23.9));
console.log(Math.floor(23.9));
console.log(Math.floor(23.9));
console.log(Math.trunc(-23.4));
console.log(Math.floor(-23.9));

//Rounding Decimals
console.log((2.7).toFixed(0));
console.log(+(2.75453).toFixed(3));

// Remainder Operator isEven is a practical function implementation
console.log(5 % 2);
console.log(5 / 2);
console.log(8 % 3);
console.log(8 / 3);
console.log(6 % 2);
console.log(6 / 2);
console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(10));
console.log(isEven(513));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')],
//     forEach(function (row, i) {
//       if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     });
// });

// Numeric Seperators ( Use underscore '_' to make your numbers more readable)

const diameter = 287_460_000_000;
console.log(diameter);

console.log(+`230000`);
// Will not work when converting strings to numbers same with parseInt
console.log(+`230_000`);

// Working With BIGINT (primitive data type)

// Numbers are represented in 64 bits

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 55 - 1); // Unsafe Number Example

console.log(15604098409152658180163158640n);
console.log(BigInt(654061046));

console.log(10000n + 1392940n);

const huge = 15604098409152658180163158640n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15);
console.log(20n == 20);

// Division

console.log(10n / 3n);

// Creating Dates
const now = new Date();
console.log(now);

console.log(new Date('Wed Jun 26 2024 14:10:42'));
console.log(new Date('December 25, 2024'));

console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with Dates methods

const future = new Date(2037, 10, 19, 15, 23);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

// Date Operations

const future1 = new Date(2037, 10, 19, 15, 23);
console.log(+future1);

const calcDatePassed = (date1, date2) =>
  (date2 - date1) / (1000 * 60 * 60 * 24);

const calcDate = calcDatePassed(new Date(now), new Date(2024, 10, 19));
console.log(Math.abs(calcDate));
