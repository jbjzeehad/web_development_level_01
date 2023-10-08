/* 
1. var let const
2. default parameter
3. tempplate string
4. arrow function
5. destructuring and spread operators
6. entries
7. for of (loop), for in(object)
*/

const a = 56;
const numbers = [56, 7, 8];
const person = {
    name: 'sakib khan'
}

const msg = `Hi, ${person.name} has a : ${a} access to ${numbers[2]}`;

const square = x => x * x;
const sum = (a, b) => a + b;

const { age, z, ...others } = { x: 2, y: 5, z: 3, name: 'ovijeet', age: 55 };
const [first, second, ...remaining] = ['ram', 'nam', 'jodu', 'kodu', 'loru'];