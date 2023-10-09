/*
8 ways to get undefined
*/

let first;
function second(a, b) {
    const total = a + b;
}

const result = second();


function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}

third(2, 6);
console.log(result);

function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return a + b;
}

const motal = noNegative(3, -4);
console.log(motal);

const fifth = {
    id: 2, name: 'ponch', age: 30
}
console.log(fifth.age, fifth.salary);

const sixth = [3, 5, 6, 7, 8, 7];
console.log(sixth[6]);