
const number = Math.max(43, 5, 465, 56, 67, 467, 5);

const number2 = Math.max(...[43, 5, 465, 56, 67, 467, 5]);
console.log(number2);


// use spread operator to copy

const arr1 = [1, 2, 3];
const arr2 = arr1;
const arr3 = [...arr1];
arr3.push(10);
console.log(arr1);
console.log(arr2);
console.log(arr3);