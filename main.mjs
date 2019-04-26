import binarySearch from 'binarySearch';
import selectionSort from 'selectionSort';
import quickSort from 'quickSort';
import fib from 'fib';

console.log("Testing binarySearch.");

const arr = [1,2,3,4,5,6,7,8,9,10];

console.log(`Test1. ${binarySearch(arr, 2) === 1 ? "PASSED": "FAILED"}. Output: ${binarySearch(arr, 2)}. ExpectedOutput: 1.`);
console.log(`Test2. ${binarySearch(arr, 10) === 9 ? "PASSED": "FAILED"}. Output: ${binarySearch(arr, 10)}. ExpectedOutput: 9.`);
console.log(`Test3. ${binarySearch(arr, 0) === -1 ? "PASSED": "FAILED"}. Output: ${binarySearch(arr, 0)}. ExpectedOutput: -1.`);
console.log(`Test4. ${binarySearch(arr, 1) === 0 ? "PASSED": "FAILED"}. Output: ${binarySearch(arr, 1)}. ExpectedOutput: 0.`);

const arr2 = [];

console.log(`Test5. ${binarySearch(arr2, 2) === -1 ? "PASSED": "FAILED"}. Output: ${binarySearch(arr2, 2)}. ExpectedOutput: -1.`);

const arr3 = [1];

console.log(`Test6. ${binarySearch(arr3, 1) === 0 ? "PASSED": "FAILED"}. Output: ${binarySearch(arr3, 1)}. ExpectedOutput: 0.`);
console.log(`Test7. ${binarySearch(arr3, 10) === -1 ? "PASSED": "FAILED"}. Output: ${binarySearch(arr3, 10)}. ExpectedOutput: -1.`);
console.log("End testing binarySearch.");

let resultArr;

console.log("Testing selectionSort.");

const arr4 = [];
resultArr = selectionSort(arr4);
console.log(`Test1. ${resultArr.length === 0 ? "PASSED": "FAILED"}. Output: [${resultArr.toString()}]. ExpectedOutput: [].`);

const arr5 = [10,9,8,4,5,6,2,8,-1];
resultArr = selectionSort(arr5);
let checkArr = [-1,2,4,5,6,8, 8,9,10];
console.log(`Test2. ${resultArr.length === 9 && resultArr.toString() === checkArr.toString() ? "PASSED": "FAILED"}. Output: [${resultArr.toString()}]. ExpectedOutput: [${checkArr.toString()}].`);

const arr6 = [30,20,10,-1,-2,-5,-10,-20];
resultArr = selectionSort(arr6);
checkArr = [-20,-10,-5,-2,-1,10,20,30];
console.log(`Test3. ${resultArr.length === 8 && resultArr.toString() === checkArr.toString() ? "PASSED": "FAILED"}. Output: [${resultArr.toString()}]. ExpectedOutput: [${checkArr.toString()}].`);
const arr7 = [30];
resultArr = selectionSort(arr7);
checkArr = [30];
console.log(`Test4. ${resultArr.length === 1 && resultArr.toString() === checkArr.toString() ? "PASSED": "FAILED"}. Output: [${resultArr.toString()}]. ExpectedOutput: [${checkArr.toString()}].`);
console.log("End testing selectionSort.");
const arr8 = [];
resultArr = quickSort(arr8);
console.log(`Test1. ${resultArr.length === 0 ? "PASSED": "FAILED"}. Output: [${resultArr.toString()}]. ExpectedOutput: [].`);

const arr9 = [10,9,8,4,5,6,2,8,-1];
resultArr = quickSort(arr9);
checkArr = [-1,2,4,5,6,8, 8,9,10];
console.log(`Test2. ${resultArr.length === 9 && resultArr.toString() === checkArr.toString() ? "PASSED": "FAILED"}. Output: [${resultArr.toString()}]. ExpectedOutput: [${checkArr.toString()}].`);

const arr10 = [30,20,10,-1,-2,-5,-10,-20];
resultArr = quickSort(arr10);
checkArr = [-20,-10,-5,-2,-1,10,20,30];
console.log(`Test3. ${resultArr.length === 8 && resultArr.toString() === checkArr.toString() ? "PASSED": "FAILED"}. Output: [${resultArr.toString()}]. ExpectedOutput: [${checkArr.toString()}].`);
const arr11 = [30];
resultArr = quickSort(arr11);
checkArr = [30];
console.log(`Test4. ${resultArr.length === 1 && resultArr.toString() === checkArr.toString() ? "PASSED": "FAILED"}. Output: [${resultArr.toString()}]. ExpectedOutput: [${checkArr.toString()}].`);

console.log("Testing quickSort");


console.log("End testing quickSort.");

console.log("Testing fib.");

let out;
out = fib(0);
console.log(`Test1. ${out === 0? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 0.`);

out = fib(10);
console.log(`Test2. ${out === 55? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 55.`);

out = fib(20);
console.log(`Test3. ${out === 6765? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 6765.`);

out = fib(50);
console.log(`Test4. ${out === 12586269025 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 12586269025.`);

out = fib(-10);
console.log(`Test5. ${out === -55 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: -55.`);

out = fib(-20);
console.log(`Test6. ${out === -6765 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: -6765.`);

out = fib(-50);
console.log(`Test7. ${out === -12586269025 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: -12586269025.`);

console.log("End testing fib.");




