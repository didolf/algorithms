import binarySearch from 'binarySearch';

const arr = [1,2,3,4,5,6,7,8,9,10];

console.log("Testing binarySearch.");
console.log(`Test1. Output: ${binarySearch(arr, 2)}. ExpectedOutput: 1.`);
console.log(`Test2. Output: ${binarySearch(arr, 10)}. ExpectedOutput: 9.`);
console.log(`Test3. Output: ${binarySearch(arr, 0)}. ExpectedOutput: -1.`);
console.log(`Test4. Output: ${binarySearch(arr, 1)}. ExpectedOutput: 0.`);

const arr2 = [];
console.log(`Test5. Output: ${binarySearch(arr2, 2)}. ExpectedOutput: -1.`);
const arr3 = [1];
console.log(`Test6. Output: ${binarySearch(arr3, 1)}. ExpectedOutput: 0.`);
console.log(`Test7. Output: ${binarySearch(arr3, 10)}. ExpectedOutput: -1.`);

