// function declaration

function add(a, b) {
    const result = a + b;
    return result;
}

const sum = add(5, 90);
console.log(sum);


// function expression

const add2 = function (a, b) {
    return a + b;
}

// arrow function

const add3 = (a, b) => a + b;
const add4 = (a, b, c, d) => a + b + c * d;

const sum34 = add4(4, 6, 8, 44);
console.log(sum34);