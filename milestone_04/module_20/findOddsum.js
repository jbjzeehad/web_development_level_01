
function getSum(numbers) {
    console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum += element;

        console.log(index, element, sum);
    }
    console.log(sum);
}
const mynumbers = [12, 34, 54, 6, 7, 8,];
getSum(mynumbers);