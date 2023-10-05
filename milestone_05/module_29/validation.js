const number = 23;
if (typeof number === 'number') {
    console.log('value is a number');
}
else {
    console.log("value is not a number");
}

const numbers = [2, 3, 545, 56, 7, 7, 55, 45];
const student = { name: 'Rongila Rafsan', job: 'Khawadawa kora' }

console.log(typeof numbers);
console.log(typeof student);

console.log(Array.isArray(numbers));

console.log(isNaN(2)); //false means number
console.log(isNaN('2'));
console.log(isNaN('ab')); //true means not a number
console.log(isNaN({})); //true means not a number