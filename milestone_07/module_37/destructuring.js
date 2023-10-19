// array destructuring

const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[0];

// const [x, y] = [42, 65];
const [x, y] = numbers;
function getValus(num1, num2) {
    const nums = [num1, num2];
    return nums;
};
// console.log(x, y);
console.log(getValus(34, 56));

// Object destructuring

const student = {
    name: 'alu', age: 14, lang: ['html', 'css', 'js'], speci: {
        h: 66,
        weight: 45,
        add: 'barishal'
    }
};

const { name, age } = student;
const { weight, height } = student.speci;
console.log()