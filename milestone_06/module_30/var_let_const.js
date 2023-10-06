

// var : no reason  to use var
// let : allow it to reassign
// coonst : do not allow it to reassign

const money = 25;
const rich = money + 25;
console.log(rich);

let count = 0;
count += 10;
console.log(count);

// const numbers = [12, 34, 6, 7];
// numbers = [1, 2, 4, 5];
// console.log(numbers);

let num = [2, 3, 4, 5];
num = [1, 23, 4];
console.log(num);

const student = {
    name: 'moyna pakhi',
    class: 12
}
student = { name: 'kokil konthi' };