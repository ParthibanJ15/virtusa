function binarySearch(arr: number[], target: number): number {
    let left: number = 0;
    let right: number = arr.length - 1;

    while (left <= right) {
        const mid: number = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetValue = 23;
const index = binarySearch(sortedArray, targetValue);
console.log(`Element found at index: ${index}`);