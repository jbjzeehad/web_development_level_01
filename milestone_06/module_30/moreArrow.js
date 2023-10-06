

const diff = (x, y) => x - y;
const multi = (a, b, c) => a * b * c;

const getAge = (person) => person.age;

const stu = { name: 'ananta', age: 45 };
const age = getAge(stu);
console.log(age);

const getthird = numbers => numbers[2];
const third = getthird([5, 9, 3, 7]);
console.log(third);

// no parameter

const getpi = () => Math.PI;
console.log(getpi());

// large arrow function

const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mul = x * y * z;
    const result = sum + mul;
    return result;
}

