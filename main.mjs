import binarySearch from 'binarySearch';
import selectionSort from 'selectionSort';
import quickSort from 'quickSort';
import fibCycle, {fib, lastNumOfFib, lastNumOfFibCycle, findPeriod, findFibMod} from 'fib';
import getGCD from 'getGCD';
import findMinPoints from 'findMinPoints';
import continuousBackpack from 'continuousBackpack';
import findMaxSum from 'findMaxSum';
import huffmanCodeToStr from 'huffmanCodeToStr';

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

console.log("Testing fibCycle.");


out = fibCycle(0);
console.log(`Test1. ${out === 0? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 0.`);

out = fibCycle(10);
console.log(`Test2. ${out === 55? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 55.`);

out = fibCycle(20);
console.log(`Test3. ${out === 6765? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 6765.`);

out = fibCycle(50);
console.log(`Test4. ${out === 12586269025 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 12586269025.`);

out = fibCycle(-10);
console.log(`Test5. ${out === -55 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: -55.`);

out = fibCycle(-20);
console.log(`Test6. ${out === -6765 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: -6765.`);

out = fibCycle(-50);
console.log(`Test7. ${out === -12586269025 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: -12586269025.`);

console.log("End testing fibCycle.");

console.log("Testing lastNumOfFib.");

out = lastNumOfFib(0);
console.log(`Test1. ${out === 0? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 0.`);

out = lastNumOfFib(10);
console.log(`Test2. ${out === 5? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 5.`);

out = lastNumOfFib(20);
console.log(`Test3. ${out === 5? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 5.`);

out = lastNumOfFib(50);
console.log(`Test4. ${out === 5 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 5.`);

out = lastNumOfFib(-10);
console.log(`Test5. ${out === 5 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 5.`);

out = lastNumOfFib(-20);
console.log(`Test6. ${out === 5 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 5.`);

out = lastNumOfFib(-50);
console.log(`Test7. ${out === 5 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 5.`);
out = lastNumOfFib(-21);
console.log(`Test7. ${out === 6 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 6.`);


console.log("End testing lastNumOfFib.");

console.log("Testing lastNumOfFibCycle.");

out = lastNumOfFibCycle(0);
console.log(`Test1. ${out === 0? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 0.`);

out = lastNumOfFibCycle(10);
console.log(`Test2. ${out === 5? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 5.`);

out = lastNumOfFibCycle(20);
console.log(`Test3. ${out === 5? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 5.`);

out = lastNumOfFibCycle(50);
console.log(`Test4. ${out === 5 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 5.`);

out = lastNumOfFibCycle(-10);
console.log(`Test5. ${out === 5 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 5.`);

out = lastNumOfFibCycle(-20);
console.log(`Test6. ${out === 5 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 5.`);

out = lastNumOfFibCycle(-50);
console.log(`Test7. ${out === 5 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 5.`);
out = lastNumOfFibCycle(-21);
console.log(`Test7. ${out === 6 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 6.`);


console.log("End testing lastNumOfFibCycle.");

console.log("Testing findPeriod.");

let arr12 = [1,2,3,1,2,3,1,2,3];
out = findPeriod(arr12, 1);
console.log(`Test1. ${out == 3? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 3.`);
arr12 = [1,1,1,1,1,1,1,1];

out = findPeriod(arr12, 1);
console.log(`Test2. ${out == 1? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 1.`);
arr12 = [1,2,1,2,1,2,1,2];

out = findPeriod(arr12, 1);
console.log(`Test3. ${out == 2? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 2.`);
arr12 = [1,2,3,4,5,1,2,3,4,5,1,2,3];

out = findPeriod(arr12, 1);
console.log(`Test4. ${out == 5 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 5.`);
arr12 = [1];

out = findPeriod(arr12, 1);
console.log(`Test5. ${out == -1 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: -1.`);
arr12 = [1,2,3,4,5];

out = findPeriod(arr12, 1);
console.log(`Test6. ${out == -1 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: -1.`);
arr12 = [1,2,3,4,5,1,2,3,4];

out = findPeriod(arr12, 1);
console.log(`Test7. ${out == -1 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: -1.`);
arr12 = [10,20,30,10,20,30];

out = findPeriod(arr12, 1);
console.log(`Test7. ${out == 3 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: 3.`);


console.log("End testing findPeriod.");

console.log("Testing findFibMod.");

out = findFibMod(20, 12);
console.log(`Test1. ${out == 6765 % 12? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: ${6765 % 12}.`);
out = findFibMod(45, 18);
console.log(`Test2. ${out == 1134903170 % 18? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: ${1134903170 % 18}.`);
out = findFibMod(50, 9);
console.log(`Test3. ${out == 12586269025 % 9? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: ${12586269025 % 9}.`);
out = findFibMod(9, 2);
console.log(`Test4. ${out == 34 % 2? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: ${34 % 2}.`);

console.log("End testing findFibMod.");

console.log("Testing getGCD.");

out = getGCD(1, 2);
console.log(`Test1. ${out === 1 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: ${1}.`);

out = getGCD(1, 20);
console.log(`Test1. ${out === 1 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: ${1}.`);

out = getGCD(100, 90);
console.log(`Test1. ${out === 10 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: ${10}.`);

out = getGCD(25, 15);
console.log(`Test1. ${out === 5 ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: ${5}.`);

console.log("End testing getGCD.");

console.log("Testing findMinPoints.");

out = findMinPoints(3,[[1,3], [2,5],[0,2]]);
checkArr = [2];
console.log(`Test1. ${out.toString() === checkArr.toString() ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: ${checkArr}.`);

out = findMinPoints(1,[[1,3]]);
checkArr = [3];
console.log(`Test2. ${out.toString() === checkArr.toString() ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: ${checkArr}.`);

out = findMinPoints(4,[[1, 2], [3, 4], [5,6], [7,8]]);
checkArr = [2,4,6,7];
console.log(`Test3. ${out.toString() === checkArr.toString() ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: ${checkArr}.`);

console.log("End testing findMinPoints.");


console.log("Testing continuousBackpack.");
out = continuousBackpack(30,[[60,30], [50,50],[120,240]]);
checkArr = 60;
console.log(`Test1. ${out.toString() === checkArr.toFixed(3) ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: ${checkArr.toFixed(3)}.`);

out = continuousBackpack(300,[[60,30], [50,50],[120,240]]);
checkArr = 110 + 0.5 * 220;
console.log(`Test2. ${out.toString() === checkArr.toFixed(3) ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: ${checkArr.toFixed(3)}.`);

out = continuousBackpack(200,[[60,200]]);
checkArr = 60;
console.log(`Test3. ${out.toString() === checkArr.toFixed(3) ? "PASSED": "FAILED"}. Output: ${out} . ExpectedOutput: ${checkArr.toFixed(3)}.`);

console.log("End testing continuousBackpack.");

console.log("Testing continuousBackpack.");

out = continuousBackpack(200,[[60,200]]);
for (let i = 1; i < 10000; i++)
{
    if (findMaxSum(i).reduce((sum, item) => sum += item, 0) !== i)
    {
        console.log(`Test ${i}. FAILED.`);
        break;
    }
}
console.log("End testing continuousBackpack.");


console.log("Testing huffmanCodeToStr.");

/**
 * НАПИСАТЬ ТЕСТЫ
 */
console.log("End testing huffmanCodeToStr.");