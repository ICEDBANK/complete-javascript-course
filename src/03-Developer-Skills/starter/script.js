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
};

calcTempAmplitude([3, 7, 4, 8, 1]);
calcTempAmplitude(temperatures);
