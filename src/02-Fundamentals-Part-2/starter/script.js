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

    ///*

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

    //*/

// Intro Into Arrays



// Basic Array Operations ( Methods )



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



