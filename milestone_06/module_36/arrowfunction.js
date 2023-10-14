
const sum = function (a, b) {
    return a + b;
}
console.log(sum(5, 6));



const add = (c, d) => c + d;

console.log(add(45, 66));

// arrow function with object

const objExm = (person) => person.number;

const student = {
    name: "Rahim",
    number: 40
};

console.log(objExm(student));

// arrow function with array

const arrExm = value => value[2];

const numberList = [23, 54, 5, 67, 545, 343, 445, 3];

console.log(arrExm(numberList));
