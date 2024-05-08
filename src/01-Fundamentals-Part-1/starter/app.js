// let js = 'amazing';

// console.log(40 + 8 + 23 - 10);


// let firstName = ('Joshua');
// let lastName = ('Rice');
// let fullName = (firstName + ' ' + lastName);
// console.log(fullName);

// // 7 type of data types

// let age = 23; // <-Number Datatype
// let dataString = ('testing'); // <- String
// let fullage = false; // <- Boolean
// let children; // <- undefined

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Joshua');
// console.log(typeof 15.254);

// javaScriptIsFun = 'YES!'; // Dynamic Typing see line 18
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(typeof year); // returns as undefined

// console.log(typeof null); // returns as an object

// let drinkingAge = 21; // Keyword "let" allows mutation
// drinkingAge = 18;

// const birthYear = 1988; // const variables can not be mutated
// // birthYear = 2001;

// // *** Operators ***
// const currentYear = 2024;

// const ageJosh = currentYear - 1988;
// console.log(ageJosh);

// const ageSarah = currentYear - 1989;
// console.log(ageJosh,ageSarah);

// console.log(ageJosh * 2, ageJosh / 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2*2*2

// console.log(firstName + ' ' + lastName);
// // concatenation of two variables using the plus sign

// let x = 10 + 5; // 15
// console.log(x);
// // = and * are two different mathamatical operators
// x += 10; // 15 + 10 = 25
// console.log(x);
// x *= 4; // 25 * 4 = 100
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);
// --x;
// console.log(x);

// //comparison operators
// console.log(ageJosh > ageSarah);
// console.log(ageJosh < ageSarah);
// console.log(ageJosh >= ageSarah);
// console.log(ageJosh <= ageSarah);
// console.log(ageJosh != ageSarah);

// console.log(currentYear - 1988 > currentYear - 1989);

// // Operator Precedence
// const operatorPrecedence =  currentYear - 1988 > currentYear - 1989;
// console.log(operatorPrecedence);
// // subtraction has precedence over > greater than

// let w,y;
// w = y = 25 - 10 - 5; // 25 - 10 - 5 = 10, w = y = 10;
// console.log ( w , y);

// const averageAge = ((ageJosh + ageSarah) / 2);
// console.log(ageJosh , ageSarah , averageAge);

// // Section 1 Coding Challenge with Bonus 

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.76;

// const bmiJohn = massJohn / ( heightJohn * heightJohn );
// const bmiMark = massMark / ( heightMark * heightMark );

// console.log("John's BMI =" + bmiJohn + " Mark's BMI =" + bmiMark);

// const markHigherBMI = bmiMark > bmiJohn;

// console.log( markHigherBMI );

// const nameFirst = 'Joshua';
// const job = 'Programmer';

// const joshua = "I'm " + nameFirst + ' a ' + (currentYear - birthYear) + ' ' + job;

// console.log(joshua);

// const joshuaNew = `I'm ${nameFirst}, a ${currentYear - birthYear} year old ${job}`; // Template literals
// console.log(joshuaNew);

// console.log(`Just a regular String...`);
// console.log(`sting
// multi
// line
// literal`);

// Conditional statements

const age = 15;
const isOldEnough = 18


if(age >= isOldEnough) {

    console.log(`Sarah is ${age} years old and she is old enough to drive`);

}else {
    const yearsLeft = isOldEnough - age;
    console.log(`Sarah is ${age} years old she is not old enough to drive,
    She will have to wait ${yearsLeft} more years before applying`);

}

const birthYear = 1988;
let century = 0; 

if (birthYear <= 2000) {

    century = 20;

}else {

    century = 21;

}
console.log(century);

// Type Conversion and Coercion

