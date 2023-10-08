const numbers = [4, 5, 6, 7, 8];

function doubleIt(num) {
    return num * 2;
}

// const result = numbers.map(doubleIt);


const double2 = n => n * 2;
const result = numbers.map(double2);
const result2 = numbers.map(n => n * 2);


// map : loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns the array

// const doubled = [];

// for (const num of numbers) {
//     const double = num * 2;
//     doubled.push(double);
// }
console.log(result);
console.log(result2);