// json

const student = {
    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan'],
};
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);
// const stdobj = JSON.(studentJSON);
// console.log(stdobj);

const keys = Object.keys(student);
const values = Object.values(student);

const numbers = [23, 45, 6, 67, 8];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

const products = [
    { name: 'laptop', price: 2300, brand: 'lenevo', color: 'silver' },
    { name: 'phone', price: 2300, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 300000, brand: 'casio', color: 'black' },
    { name: 'sunglass', price: 12300, brand: 'canon', color: 'blue' },
];
const newProduct = { name: 'webcam', price: 700, brand: 'lal' };

// copy previous object and create new object

const newpro = [...products, newProduct];

console.log(newpro);

// create a new array without a specific item.

const rem = products.filter(p => p.name !== 'phone');
console.log(rem);