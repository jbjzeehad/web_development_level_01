function sum(a, b, c) {
    console.log(arguments[5]);
    const result = a + b + c;
    return result;
}
const total = sum(34, 6, 5, 76, 34, 67, 78, 65);
console.log(total);