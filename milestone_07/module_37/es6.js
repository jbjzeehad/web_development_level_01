const numbers = [34.456, 77, 8, 75, 3];
const student = {
    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan'],
};

// template string
const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[1]}.`;
console.log(about);
// arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addTHree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread opertor

const newnumber = numbers;
const newnumber2 = [...numbers];
const newnumber3 = [numbers];
numbers.push(324);
numbers.push(343);
numbers.push(3445);
numbers.push(3445);
console.log(newnumber);
console.log(numbers);
console.log(newnumber2);
console.log(newnumber3);
// create an array from an older array and add an element
const currentNumbers = [...numbers, 55];
console.log(numbers);
console.log(currentNumbers);
