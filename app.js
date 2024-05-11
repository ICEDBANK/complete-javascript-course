// Define the cell types and bundles
const bigCell = {
    volume: 250.666,
    quantity: 21
};

const smallCell = {
    volume: 133.1667,
    quantity: 126,
    maxWeight: 10000
};

// Define bundle objects
const bundle6x2 = {
    volume: 36,
    bundleQuantity: 49,
    weight: 5501.52
};

// Function to find optimal storage solution
function findOptimalStorage() {
    // Initialize variables
    let output = '';
  
    // Dedicate big cells for bundle6x2 objects
    const bigCellCapacity = 6; // Capacity for bundle6x2 in big cells
    let remainingBigCellCapacity = bigCellCapacity;
    let bundle6x2Count = Math.min(remainingBigCellCapacity, bundle6x2.bundleQuantity); // Number of bundle6x2 to place in big cells
    remainingBigCellCapacity -= bundle6x2Count;
    const bigCellVolumeUsed = bundle6x2Count * bundle6x2.volume;
    const availableBigCellVolume = bigCell.volume - bigCellVolumeUsed;
    output += `Big Cell: ${bundle6x2Count} bundle(s) of bundle6x2 (Available Volume: ${availableBigCellVolume})\n`;

    // Fill small cells with other bundles
    let remainingSmallCellCapacity = smallCell.quantity;
    // Implement logic to fill small cells with other bundles here
  
    // Output to HTML table
    const tableBody = document.getElementById('outputBody');

    // Append rows for big cells
    tableBody.innerHTML += `<tr><td>Big Cell</td><td>${bundle6x2Count} bundle(s) of bundle6x2</td><td>${bigCellVolumeUsed}</td><td>N/A</td></tr>`;
    
    // Append rows for small cells
    // Implement logic to append rows for small cells here

    // Display output
    console.log(output);
}














// const bigCell = {

//     volume: 250.666, 
//     quantity : 21

// }; // BigCells can not store more than the volume can be fill.

// const smallCell = {

//     volume: 133.1667,
//     quantity: 126,
//     maxWeight : 10000

// }; // SmallCells can not store more than the avaible volume and the weight can not exceed maxWeight ( Huge safety concern )

// const bundle6x2 = {

//     volume: 36,
//     bundleQuantity: 49,
//     weight: 5501.52

// };

// const bundle6x4 = {

//     volume: 48,
//     bundleQuantity: 47,
//     weight: 4645.73

// };

// const bundle5x3 = {

//     volume: 30,
//     bundleQuantity: 49,
//     weight: 5318.136

// };


// // The goal is to determine to optimal storage solution
// This needs to be trigger with a onClick function call within index.html and im using a external file for javascript called app.js
// all solutions will display witin a table styled with bootstap classes
// // The app will iterate through every option until bundleQuantity reach zero for each bundle object
// // as the app fills a cell it will calculate the remaining cells available to fill and repeat the process untill bundleQuantity reaches 0 for each bundle object. Once complete it will output the number of cells that are left to fill
// // bigCells can not exceed the volume available. these cells do not have weight restrictions. App can not use more cells than 21 of this cell.
// // smallCells can not exceed volume or weight restricitons. App can not use more cells than 126
// We can group different bundle objects together to optimize on space as an example we can group bundleQuantity : 1 of object bundle5x3 & bundleQuantity: 1 of object bundle6x4 in 1 small cell because it does not exceed the weigt limin and we will have 55 volume available and be less than 10000
// // the output can be either through a html table or within the class but it must contain the contents of each cell that filled before moving onto filling the next cell.
// We need to see what the contens of each cell. the output should show Solution 1: Cell contents 1 bundle from object bundle6x4 1 bundle from object bundle5x3 with x available volume and y remaining weight capacity
// reference this as needed smallCell volume = 133 we can put 1 object "bundle5x3" and 1 object "bundle6x4" THIS IS OPTIMIZATION and space conservation
