    let js = 'amazing';

    console.log(40 + 8 + 23 - 10);


    let firstName = ('Joshua');
    let lastName = ('Rice');
    let fullName = (firstName + ' ' + lastName);
    console.log(fullName);

    // 7 type of data types

    let xage = 23; // <-Number Datatype
    let dataString = ('testing'); // <- String
    let fullage = false; // <- Boolean
    let children; // <- undefined

    let javaScriptIsFun = true;
    console.log(javaScriptIsFun);

    console.log(typeof javaScriptIsFun);
    console.log(typeof 23);
    console.log(typeof 'Joshua');
    console.log(typeof 15.254);

    javaScriptIsFun = 'YES!'; // Dynamic Typing see line 18
    console.log(typeof javaScriptIsFun);

    let year;
    console.log(typeof year); // returns as undefined

    console.log(typeof null); // returns as an object

    let drinkingAge = 21; // Keyword "let" allows mutation
    drinkingAge = 18;

    const xbirthYear = 1988; // const variables can not be mutated
    // birthYear = 2001;

    // *** Operators ***
    const currentYear = 2024;

    const ageJosh = currentYear - 1988;
    console.log(ageJosh);

    const ageSarah = currentYear - 1989;
    console.log(ageJosh,ageSarah);

    console.log(ageJosh * 2, ageJosh / 2 ** 3);
    // 2 ** 3 means 2 to the power of 3 = 2*2*2

    console.log(firstName + ' ' + lastName);
    // concatenation of two variables using the plus sign

    let x = 10 + 5; // 15
    console.log(x);
    // = and * are two different mathamatical operators
    x += 10; // 15 + 10 = 25
    console.log(x);
    x *= 4; // 25 * 4 = 100
    console.log(x);
    x++;
    console.log(x);
    x--;
    console.log(x);
    --x;
    console.log(x);

    //comparison operators
    console.log(ageJosh > ageSarah);
    console.log(ageJosh < ageSarah);
    console.log(ageJosh >= ageSarah);
    console.log(ageJosh <= ageSarah);
    console.log(ageJosh != ageSarah);

    console.log(currentYear - 1988 > currentYear - 1989);

    // Operator Precedence
    const operatorPrecedence =  currentYear - 1988 > currentYear - 1989;
    console.log(operatorPrecedence);
    // subtraction has precedence over > greater than

    let w,y;
    w = y = 25 - 10 - 5; // 25 - 10 - 5 = 10, w = y = 10;
    console.log ( w , y);

    const averageAge = ((ageJosh + ageSarah) / 2);
    console.log(ageJosh , ageSarah , averageAge);

    // Section 1 Coding Challenge with Bonus 

    const massMark = 78;
    const heightMark = 1.69;
    const massJohn = 92;
    const heightJohn = 1.76;

    const bmiJohn = massJohn / ( heightJohn * heightJohn );
    const bmiMark = massMark / ( heightMark * heightMark );

    console.log("John's BMI =" + bmiJohn + " Mark's BMI =" + bmiMark);

    const markHigherBMI = bmiMark > bmiJohn;

    console.log( markHigherBMI );

    const nameFirst = 'Joshua';
    const job = 'Programmer';

    const joshua = "I'm " + nameFirst + ' a ' + (currentYear - birthYear) + ' ' + job;

    console.log(joshua);

    const joshuaNew = `I'm ${nameFirst}, a ${currentYear - birthYear} year old ${job}`; // Template literals
    console.log(joshuaNew);

    console.log(`Just a regular String...`);
    console.log(`sting
    multi
    line
    literal`);

// Conditional statements

    const yage = 15;
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

    const day = 'monday';

// Stric Comparison day === {day}

    switch(day) {
        case 'monday':
            console.log('plan course structure');
            console.log('Go to coding meetup');
        break;
        case 'tuesday':
            console.log('prepare theory videos');
        break;
        case 'wednesday':
            case 'thursday':
                console.log('write code examples');
        break;
        case 'friday':
            console.log('Record videos');
        break;
        case 'saturday':
            case 'sunday':
                console.log('Weekend Rest');
                break;
        default:
            console.log('Not a valid day');
    }

    if (day === 'monday'){

        console.log('plan course structure');
        console.log('Go to coding meetup');

    }else if(day === 'tuesday'){

        console.log('prepare theory videos');

    }else if(day === 'wednesday' || day === 'thursday'){

        console.log('write code examples');

    }else if(day === 'friday'){

        console.log('Record videos');

    }else if(day === 'saturday' || day === 'sunday'){

        console.log('Weekend Rest');

    }else{

        console.log('Not a valid day');

    } 

//Statements and expressions

    const me = 'joshua'; // statement
    console.log(`Hi, my name is ${me}. It is a pleasure to meet you`); // Expression

// The conditional (Ternary) Opertor

    // condition ? (if) : (else)

    const age = 19;
    const dage = 20;
    age <= dage ? 
    console.log(`I am not old enough to drink yet but i have ${dage + 1 - age} years left before i can legally`) : 
    console.log(`I am old enough to drink by ${age - (dage + 1)} year(s)`);

    const drink = age >= 21 ? 'Wine' : 'Water'; // <- This is considered an expression 
    console.log (drink);

    console.log(`I like to drink ${age >= 21 ? 'Wine' : 'Water'}`) 

    const bill = 275;

/* Write your code below. Good luck! 🙂 */

let tip = bill > 50 && bill < 300 ? bill + (bill * 0.15) : bill + (bill * 0.20)

console.log(`Your Bill was ${bill}, the tip was ${tip = tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.20} and the total value is ${tip+bill}`)
