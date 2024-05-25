// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
    Problem:

        We work for a company building a smart home thermometer. Our most recent
        task is this: "Given an array of temperatures of one day, calculate the
        temperature amplitude. Keep in mind that sometimes there might be a sensor
        error"

*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

/*!SECTION

    1.) Understanding the problem....

        Question: 

            What is Temperature Amplitude

        Answer: 
        
            Difference between highest and lowest temperature
                
        How do we determine the max and min temperatures

        What is a sensor error? And what to-do

    2.) Breaking up the problem into sub-problems...
        
        How to ignore errors?

        Find max value in temperatures array

        Find min value in temperatures array

        subtract min from max ( amplitude ) and return it.

*/

const calcTempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];

    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(`Max: ${max}, Min: ${min}`);

  return max - min;
};

calcTempAmplitude([3, 7, 4, 8, 1]);
const amplitude = calcTempAmplitude(temperatures);

console.log(amplitude);

/*!SECTION

    Problem 2:

        Function should now recieve 2 arrays of temps

        1.) Understanding the problem

            - With 2 arrays, should we implement functionality twice? 

                - Answer: No, just merge the two arrays 

        2.) Breaking up the problem into sub-problems...
        
            How do you merge two arrays?

            Answer: Concatenate arrays into a single array. 

            array3 = array1.concat(array2)

*/

const calcTempAmplitudeNew = function (t1, t2) {
  const temp = t1.concat(t2);

  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];

    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(`Max: ${max}, Min: ${min}`);

  return max - min;
};

calcTempAmplitudeNew([3, 7, 4, 8, 1]);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [65, 45, 57]);

console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',
    //value: Number(prompt('Degrees Celsius')), // Fix the bug ( convert string to Number since Prompt only accepts Strings )
    value: 10,
  };

  // B.) Find the Bug

  //console.log(measurement);
  console.table(measurement);

  //console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A.) Identify the Problem
console.log(measureKelvin());

// Using a debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const temp = t1.concat(t2);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];

    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(`Max: ${max}, Min: ${min}`);

  return max - min;
};

calcTempAmplitudeBug([3, 7, 4, 8, 1]);
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [65, 45, 57]);

// A.) Identify

console.log(amplitudeBug);

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForcast = function (arr) {
  let forecastString = ' ...';

  for (let i = 0; i < arr.length; i++) {
    forecastString += `${arr[i]}ºC in ${i + 1} days ... `;
  }

  console.log(forcastString);
};

printForcast([testData1]);
printForcast([testData2]);
