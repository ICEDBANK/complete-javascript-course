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
            
    ///*

            // Javascript has built in funtions that can be placed on arrays called methods

            const friendsArray = ['Austin', 'Sarah', 'Ducky'];
            
            const newLength = friendsArray.push('Keith'); // push function will "push" the value to the end of an array, it also return the new length
            console.log(friendsArray);
            console.log(newLength);

            friendsArray.unshift('John');
            console.log(friendsArray);
            console.log(newLength);

    //*/

// Coding Excercis 6 Challenge #2



// Intro Into Objects



// Dot vs. Bracket Notation



// Object Methods



// Coding Excercis 7 Challenge #3



// Iteration: The For Loop



// Looping Arrays, Breaking and Continuing



// Looping Backwards and Loops In Loops



// The While Loop



// Coding Excercis 8 Challenge #4


