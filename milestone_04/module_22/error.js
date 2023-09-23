function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please enter a number';

    }
    return num1 + num2;
}
const result = add(12, '45');
const result1 = add('12', '45');
const result2 = add('12', 45);
const result3 = add(12, 45);
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);