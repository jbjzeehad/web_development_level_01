//  1. how to declare a variable using let and const

const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

// 2. 6 basic conndition: ><===!==<=>=

if (fatherName == 'arnold' || season === 'rainy') {

}
else if (fatherName === 'Arnold') {

}
else {

}

// 3. array declare,index,length,push,

const numbers = [34.456, 77, 8, 75, 3];
number[0] = 56;

// for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// function 

function multipy(num1, num2) {
    const result = num1 + num2;
    return result;
}

const output = multipy(34, 67);

// Object 
const student = {
    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan'],
}

const myVariable = 'age';
console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable 