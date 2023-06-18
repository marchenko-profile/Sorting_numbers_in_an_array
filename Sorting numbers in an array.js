'use strict'

// A function that sorts numbers in masive
function sortNumbersMasive(a, b) {
    return a - b;
}

// The array to sort.
const sortetMasiv = [1, 3, 5, 7, 22, 12, 34, 2]
// We call the method on the array and pass the function
sortetMasiv.sort(sortNumbersMasive);
// Output the result
console.log(sortetMasiv);