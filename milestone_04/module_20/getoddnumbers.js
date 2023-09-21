
function getSum(numbers) {
    console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 == 1) {
            sum += element;
        }
        console.log(index, element, sum);
    }
    console.log(sum);
}
const mynumbers = [12, 34, 54, 6, 7, 8, 45, 67];
const oddnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
getSum(mynumbers);
getSum(oddnumbers);