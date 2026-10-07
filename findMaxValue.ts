function findMaxValue(arr: number[]): number {
    return Math.max(...arr);
}

const numbers: number[] = [15, 42, 8, 99, 23, 4];
const maxVal: number = findMaxValue(numbers);
console.log(`The maximum value is: ${maxVal}`);