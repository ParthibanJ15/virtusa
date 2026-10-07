"use strict";
function findMaxValue(arr) {
    return Math.max(...arr);
}
const numbers = [15, 42, 8, 99, 23, 4];
const maxVal = findMaxValue(numbers);
console.log(`The maximum value is: ${maxVal}`);
