
function add(num1, num2) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

const sum = add(5, 7);
const sum1 = add(5);
const sum2 = add();


function sumNum(a, b = 0) {
    return a + b;
}
const sum3 = sumNum(5);
console.log(sum3);
const sum4 = sumNum(5, 8);
console.log(sum4);

function sumNumDef(a = 50, b = 0) {
    return a + b;
}
const sum5 = sumNumDef(5);
console.log(sum5);
const sum6 = sumNumDef(5, 8);
console.log(sum6);
const sum7 = sumNumDef();
console.log(sum7);