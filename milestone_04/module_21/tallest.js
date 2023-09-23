function maxInArray(numbers) {
    let largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }
        console.log(element);
    }
    return largest;

}
const heights = [123, 345, 234, 156, 188];
const tallest = maxInArray(heights);
console.log('tallest person is: ', tallest);
