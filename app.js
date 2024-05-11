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

const bundles = [
    {
        name: 'bundle6x2',
        volume: 36,
        bundleQuantity: 49,
        weight: 5501.52
    },
    {
        name: 'bundle6x4',
        volume: 48,
        bundleQuantity: 47,
        weight: 4645.73
    },
    {
        name: 'bundle5x3',
        volume: 30,
        bundleQuantity: 49,
        weight: 5318.136
    }
];

// Function to find optimal storage solution
function findOptimalStorage() {
    let output = '';

    // Initialize variables to track remaining quantities
    let remainingBigCellQuantity = bigCell.quantity;
    let remainingSmallCellQuantity = smallCell.quantity;
    let remainingBundleQuantities = bundles.map(bundle => bundle.bundleQuantity);

    // Loop until all bundle quantities are zero or no more cells are available
    while (remainingBundleQuantities.some(qty => qty > 0) && (remainingBigCellQuantity > 0 || remainingSmallCellQuantity > 0)) {
        let filledCell = false;

        // Try to group bundles into small cells first
        if (remainingSmallCellQuantity > 0) {
            const groupedBundles = [];
            let totalVolume = 0;
            let totalWeight = 0;

            for (const bundle of bundles) {
                if (bundle.bundleQuantity > 0 && bundle.volume <= smallCell.volume && bundle.weight <= smallCell.maxWeight) {
                    if (totalVolume + bundle.volume <= smallCell.volume && totalWeight + bundle.weight <= smallCell.maxWeight) {
                        groupedBundles.push(bundle);
                        remainingBundleQuantities[bundles.indexOf(bundle)]--;
                        totalVolume += bundle.volume;
                        totalWeight += bundle.weight;
                    }
                }
            }

            if (groupedBundles.length > 0) {
                remainingSmallCellQuantity--;
                output += `Solution: Cell contents ${groupedBundles.length} bundles grouped together with a total volume of ${totalVolume} and remaining weight capacity of ${smallCell.maxWeight - totalWeight}<br>`;
                filledCell = true;
            }
        }

        // If small cells are not available or cannot be filled, try to fill big cells
        if (!filledCell && remainingBigCellQuantity > 0) {
            for (const bundle of bundles) {
                if (bundle.bundleQuantity > 0 && bundle.volume <= bigCell.volume) {
                    remainingBundleQuantities[bundles.indexOf(bundle)]--;
                    remainingBigCellQuantity--;
                    output += `Solution: Cell contents 1 bundle from object ${bundle.name} with ${bigCell.volume} available volume<br>`;
                    filledCell = true;
                    break;
                }
            }
        }

        // If neither small nor big cells can be filled, break the loop
        if (!filledCell) {
            break;
        }
    }

    // Output remaining cells
    output += `Remaining big cells: ${remainingBigCellQuantity}<br>`;
    output += `Remaining small cells: ${remainingSmallCellQuantity}<br>`;

    // Display output
    document.getElementById('output').innerHTML = output;
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
// // The app will iterate through every option until bundleQuantity reach zero for each bundle object
// // as the app fills a cell it will calculate the remaining cells available to fill and repeat the process untill bundleQuantity reaches 0 for each bundle object. Once complete it will output the number of cells that are left to fill
// // bigCells can not exceed the volume available. these cells do not have weight restrictions. App can not use more cells than 21 of this cell.
// // smallCells can not exceed volume or weight restricitons. App can not use more cells than 126
// We can group different bundle objects together to optimize on space as an example we can group bundleQuantity : 1 of object bundle5x3 & bundleQuantity: 1 of object bundle6x4 in 1 small cell because it does not exceed the weigt limin and we will have 55 volume available and be less than 10000
// // the output can be either through a html table or within the class but it must contain the contents of each cell that filled before moving onto filling the next cell.
// We need to see what the contens of each cell. the output should show Solution 1: Cell contents 1 bundle from object bundle6x4 1 bundle from object bundle5x3 with x available volume and y remaining weight capacity

