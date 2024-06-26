// Activating Strict Mode - A special mode in javascript which makes it easier to write secure code

    'use strict'; // Initiat at begining of code
    /*let hasDriversLicense = false;
    const passTest = true;

    if(passTest)hasDriversLicense = true;
    if(hasDriversLicense) console.log('I can drive!');

    // const interface = audio; <- reserved keyword
    // const private = 333;

    */

// Functions

    /* 
        
        function logger() {

            console.log(`Joshua`);

        }

        // Calling / Running / Invoking Function

        logger();

        // Declare function / function Name (fruitProcessor) / Pass parameters ( apples, oranges )

        function fruitProcessor(apples, oranges) {

            console.log (apples, oranges);
            const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
            return juice;

        }
        
        // storing the result of the function into a variable and passing arguments (5 , 0 ) within the function

        const smoothie = fruitProcessor(5 , 0);
        console.log(smoothie);

        const appleOrangeJuice = fruitProcessor(2 , 4);
        console.log(appleOrangeJuice);    
        
    */

    

// Function Declarations vs. Expressions

    /* 

        // Function Declaration    

        function calcAge1 (birthYear) {

            return 2024 - birthYear;

        }

        const age1 = calcAge1(1988); // Can be called before or after function is initialized
        console.log(age1);

        // Function Expression

        const calcAge2 = function(birthYear) {

            return 2024 - birthYear;

        }

        const age2 = calcAge2(1989); // must be called after the function is delcared
        console.log( age1, age2);



    */

// Arrow Functions

    /*

        const calcAge3 = birthYear => 1988 - birthYear;

        const age3 = calcAge3(1988);
        console.log(age3);

        const yearsUntilRetirement = (birthYear, firstName) => {

            const age = 2024 - birthYear;
            const retirment = 65 - age;

            return `${firstName} will be able to retire in ${retirment} years`;

        }

        console.log(yearsUntilRetirement(1988, 'Joshua'));
        console.log(yearsUntilRetirement(1994, 'Jesse'));

    */

// Functions Calling Other Functions

    /*

        function cutFruit (fruit) {

            return fruit * 4;

        }

        function fruitProcessor(apples, oranges) {

            const applePieces = cutFruit(apples);
            const orangePieces = cutFruit(oranges);

            console.log (apples, oranges);
            const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
            return juice;

        }

        console.log(fruitProcessor(2,3));

    */

// Review Functions

    /* 

        // birthYear is exclusive  calcAge4
        const calcAge4 = function (birthYear) {

            return 2024 - birthYear;

        }

        // birthYear is exclusive  calcAge4
        const yearsUntilRetirement = function(birthYear, firstName) {

            const age = calcAge4(birthYear);
            const retirment = 65 - age;

            if( retirment > 0 ) {

                console.log(`${firstName} will be able to retire in ${retirment} years`);

                return retirment;
                
            }else{

                console.log(`${firstName} has already retired`);
                return -1;

            }

            //return `${firstName} will be able to retire in ${retirment} years`;

        }
        

        console.log(yearsUntilRetirement(1988, 'Joshua'));
        console.log(yearsUntilRetirement(1950, 'Jesse'));
        
    */

// Coding Excercis 5 Challenge #1

    /*

        const calcAverage = (a , b, c, d) => (a+b+c+d) / 4;

        let ads = calcAverage(70, 90, 80, 50);
        let aks = calcAverage(230, 300, 400, 250);

        function winner ( ds , ks) {

            if( ds >= 2 * ks) {

                console.log(`ds wins (${ds} vs. ${ks})`);

            }else if (ks >= 2 * ds){

                console.log(`ks wins (${ks} vs. ${ds})`);

            }else {

                console.log(`No one wins...`);

            }

        }

        winner(ads , aks);

    */

// Intro Into Arrays
        
        /*

            // Array and objects are javascript two primary data structures

            const f1 = 'name1';
            const f2 = 'name2';
            const f3 = 'name3';

            const friendsArray = ['Austin', 'Sarah', 'Ducky']; // illeteral syntax **
            console.log(friendsArray);

            const years1 = new Array(1988, 1989, 2017, 2021);

            console.log(friendsArray[0]);
            console.log(friendsArray[2]);
            console.log(friendsArray.length);
            console.log(friendsArray[friendsArray.length-1]); // Prints last element within array

            friendsArray[0] = 'Dwight';
            console.log(friendsArray[0]);
            console.log(friendsArray);

            //friendsArray = ['jack', 'jill', 'hill']; <- can not replace all elements

            const firstName = 'joshua';
            const joshua = [firstName, 'Rice', 2024 - 1988, 'Programmer' , friendsArray];
            console.log(joshua);

            // Exercise using arrays

            const calcAge4 = function (birthYear) {

                return 2024 - birthYear;
    
            }

            const years = [1988, 1989, 2010, 2017, 2021];

            //console.log(calcAge4(years)); // <-- can not compute NaN

            const age4 = calcAge4(years[0]);
            const age5 = calcAge4(years[3]);
            const age6 = calcAge4(years[years.length-1]);
            console.log(age4, age5, age6);

            const ages = [calcAge4(years[0]), calcAge4(years[3]), calcAge4(years[years.length-1])]; // Any position of an array needs to be a expression  function calls are legal
            console.log(ages);

        */

// Basic Array Operations ( Methods )
            
    /*

            // Javascript has built in funtions that can be placed on arrays called methods

            const friendsArray = ['Austin', 'Sarah', 'Ducky'];

            // Add-to methods
            
            let newLength = friendsArray.push('Keith'); // push function will "push" the value to the end of an array, it also return the new length
            console.log(friendsArray);
            console.log(newLength);

            newLength = friendsArray.unshift('John'); // unshift function will "push" the value to the start of an array, it also return the new length
            console.log(friendsArray);
            console.log(newLength);

            // Remove Elements
            let popElement = friendsArray.pop(); // pop function will remove last element of an array and return the value of that last element
            newLength = friendsArray;
            console.log(friendsArray);
            console.log(newLength);
            console.log(popElement);

            popElement = friendsArray.shift();
            newLength = friendsArray;
            console.log(friendsArray);
            console.log(newLength);
            console.log(popElement);

            console.log(friendsArray.indexOf('Sarah')); // allows you to find the position of a element

            console.log(friendsArray.includes('Sarah')); // verifies an element existance within an array

            if (friendsArray.includes('Sarah')) console.log('You have a friend call Sarah');

    */

// Coding Excercis 6 Challenge #2
            
    /* // My attempt it works to my liking and does what i need it to do

    function calcTip(bill){
    
        const owe = bill;
        const tips = [.15, .2]
        const tip = owe <= 300 && owe >= 50 ? owe * tips[0] : owe * tips[1];
        
        
        return console.log(`The bill was ${owe}, the tip was ${tip}, and the total value ${owe + tip}`);
        
    }
    
    const bills = [calcTip(125), calcTip(555), calcTip(44)];
    console.log(bills);
    

    */

    /*

        // const calcTip = function(bill) {

        //     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

        // }

        const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // Arrow Function returning 

        const bills = [125,555,44];

        const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
        const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
        console.log(bills, tips, totals)

    */

// Intro Into Objects

    /*

        // Object literals, The difference between arrays and objects is object allowed unstructured data unlike arrays

        const joshua = 
        {
            firstName : 'Joshua',
            lastName : 'Rice',
            age: 2024 - 1988,
            job: 'Programmer',
            friends: ['Sarah', 'Austin', 'Ducky']
        }

    */

// Dot vs. Bracket Notation
        
   /*

        // object DOT notation

        const joshua = 
        {
            firstName : 'Joshua',
            lastName : 'Rice',
            age: 2024 - 1988,
            job: 'Programmer',
            friends: ['Sarah', 'Austin', 'Ducky']
        }

        console.log(joshua);
        console.log(joshua.lastName); // joshua"DOT"lastName is an opertor to retrieve property "lastName" from object joshua

        // Bracket notation

        console.log(joshua['lastName']); // Accessing the 'lastName' property of the 'joshua' object using bracket notation accepts expressions

        const namekey = 'Name'; // expression
        console.log(joshua[`first` + namekey]); // Accessing the property "firstName" of the 'joshua' object by concatenating the string "first" with the value of the variable 'namekey'

        console.log(joshua[`last` + namekey]); // Accessing the property "lastName" of the 'joshua' object by concatenating the string "last" with the value of the variable 'namekey'
        //console.loger(joshua.'last' + nameKey);

        // When we need to compute the property name like above we have to use the bracket notation otherwise use DOT ( mush cleaner)

        // const interestedIn = prompt('What do you want to know about Joshua? Chose between firstName, lastName, age, job, and friends' );
        // console.log(joshua[interestedIn]);

        // if(joshua[interestedIn]){
        //     console.log(joshua[interestedIn]);
        // }else{
        //     console.log('Wrong request Chose between firstName, lastName, age, job, and friends');
        // }

        joshua.location = 'Pennsylvania';
        joshua['GitHub'] = 'icedbank';
        console.log(joshua);

        // Exercise Challenge write a sentance in a dynamic way
        // joshua has 3 friends, and his best friend is Sarah

        // Outputting a formatted string using template literals to display information about Joshua and his friends

        // Template literal with placeholders for dynamic values
        console.log(`${joshua.firstName} has ${joshua.friends.length} friends and his best friend is ${joshua.friends[0]}`);
        // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        // 1. Interpolation: `${joshua.firstName}` accesses the value of the 'firstName' property of the 'joshua' object.
        // 2. Interpolation: `${joshua.friends.length}` accesses the length of the 'friends' array property of the 'joshua' object.
        // 3. Access: `joshua.friends[0]` accesses the first element of the 'friends' array property of the 'joshua' object.
        // 4. Output: Outputs the formatted string containing the dynamic values.


   */

// Object Methods
        
   /*

   const joshua = 
   {
       firstName : 'Joshua',
       lastName : 'Rice',
       birthYear: 1988,
       job: 'Programmer',
       friends: ['Sarah', 'Austin', 'Ducky'],
       hasDriverLicense: true,

       //calcAge: function(birthYear){return 2024 - birthYear;}

       //calcAge: function(){console.log (this); return 2024 - this.birthYear;}

       calcAge: function(){this.age = 2037 - this.birthYear; return this.age;}

   };
   
   console.log(joshua.age);
   //console.log(joshua ['calcAge'](1988));

   */

// Coding Excercis 7 Challenge #3

/*

   
const joshua = 
{
    firstName : 'Joshua',
    lastName : 'Rice',
    birthYear: 1988,
    job: 'Programmer',
    friends: ['Sarah', 'Austin', 'Ducky'],
    hasDriverLicense: false,

    //calcAge: function(birthYear){return 2024 - birthYear;}

    //calcAge: function(){console.log (this); return 2024 - this.birthYear;}

    calcAge: function(){this.age = 2024 - this.birthYear; return this.age;},

    getSummary : function(){return `${this.firstName}, is a ${this.calcAge()} year old ${this.job} and he ${this.hasDriverLicense ? "has a drivers License" : "does not have a drivers Licenese"}`}

};

   console.log(joshua.getSummary());

*/



    /* Write your code below. Good luck! 🙂 */

    /*

        const mark = {
            fullName: 'Mark Miller',
            mass: 78,
            height: 1.69,
            bmi: 0,
            calcBMI: function(){return this.bmi = this.mass / ( this.height * this.height)}
        }

        const john = {
            fullName: 'John Smith',
            mass: 78,
            height: 1.69,
            bmi: 0,
            calcBMI: function(){return this.bmi = this.mass / ( this.height * this.height)}
        }

            if(mark.calcBMI() > john.calcBMI()) {

                console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`);

            } else {

                console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`);

            }



    */

// Iteration: The For Loop
            
            /*

                // for loop keeps running while condition is TRUE
                for(let rep = 1; rep <= 10; rep++ ){

                    console.log(`Lifting weights repetition ${rep}`);

                }

            */

// Looping Arrays, Breaking and Continuing

                /*

                const joshua = [
                    'Joshua',
                    'Rice',
                    2024 - 1988,
                    'Programmer',
                    ['Sarah', 'Austin', 'Ducky'],
                ];
                
                const types = [];
                const type = [];
                
                for (let i = 0; i < joshua.length; i++) {
                    // Reading from joshua array
                    console.log(joshua[i], typeof joshua[i]);
                
                    // Filling types Array
                    types[i] = typeof joshua[i];
                
                    // Filling type Array using push Method
                    type.push(typeof joshua[i]);
                }
                
                console.log(type);
                
                const year = [1988, 2006, 2010, 2017, 2021];
                const ages = [];
                
                for (let i = 0; i < year.length; i++) {
                    ages.push(2024 - year[i]);
                }
                
                console.log(ages);
                
                // continue and Break conditional loops
                
                console.log('---- Strings Only ----');
                
                for (let i = 0; i < joshua.length; i++) {
                    if (typeof joshua[i] !== 'string') continue;
                
                    // Reading from joshua array
                    console.log(joshua[i], typeof joshua[i]);
                }
                
                console.log('---- Numbers Only ----');
                
                for (let i = 0; i < joshua.length; i++) {
                    if (typeof joshua[i] === 'number') {
                        // Reading from joshua array
                        console.log(joshua[i], typeof joshua[i]);
                        break; // This will stop the loop after the first number is found
                    }
                }
                

                */

// Looping Backwards and Loops In Loops

                /*

                const joshua = [
                    'Joshua',
                    'Rice',
                    2024 - 1988,
                    'Programmer',
                    ['Sarah', 'Austin', 'Ducky'],
                ];

                    // Looping throught an array backwards

                    for(let i = joshua.length - 1; i >= 0; i-- ){

                        console.log(i, joshua[i]);

                    }

                    // Nested loop statments

                    for(let exercise = 1; exercise < 4; exercise++) {
                        console.log(`${exercise} Bench Press repetition ${exercise}`);
                    
                        for(let rep = 1; rep < 6; rep++) {
                            console.log(`Excercies ${rep}: Biceps Curls repetition ${rep}`);
                        }
                    }

                */

// The While Loop
                    
                    /*

                        // for (let rep = 1; rep <= 10; rep++) {

                        //     console.log(`Lifting weights repetition ${rep} (For Loop)`);

                        // }
                        let rep = 1;

                        while ( rep <= 10) {

                            //console.log(`lifting Weights repetition ${rep} (While Loop)`);
                            rep++;

                        }

                        let dice = Math.trunc(Math.random() * 6) +1 ;
                        //console.log(dice);

                        while (dice !== 6) {

                            console.log(`You Rolled a ${dice}`);
                            dice = Math.trunc(Math.random() * 6) +1 ;

                            if(dice === 6) console.log(`Loop is about to end...`);

                        }

                    */

// Coding Excercis 8 Challenge #4

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  };
  
  /* Write your code below. Good luck! 🙂 */
  
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  let tips = [];
  let totals = [];
  
  for (let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
  }
  
  console.log(`Bills : ${bills}`);
  console.log(`Tips : ${tips}`);
  console.log(`Totals : ${totals}`);
  
  const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  };
  
  const averageTips = calcAverage(tips);
  console.log(`Average Tips: ${averageTips}`);
  
  const averageTotals = calcAverage(totals);
  console.log(`Average Totals: ${averageTotals}`);
  
      
      
      
 // }

