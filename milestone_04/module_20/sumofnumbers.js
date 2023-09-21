
function sumofnumbers(value) {
    let sum = 0;
    for (let i = 0; i <= value; i++) {
        sum += i;
        console.log(i, sum);
    }
    return sum;
}
sumofnumbers(7);