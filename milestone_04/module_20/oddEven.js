
// console.log(4 % 2);
// console.log(44 % 2);
// console.log(48 % 2);
// console.log(42 % 2);
// console.log(74 % 2);

// console.log(41 % 2);
// console.log(449 % 2);
// console.log(487 % 2);
// console.log(425 % 2);
// console.log(743 % 2);

function isEven(randomNumber) {
    const remainder = randomNumber % 2;
    console.log(remainder);
    if (remainder == 0) {
        console.log("EVEN");
    }
    else {
        return false;
    }

}
function isODD(randomNumber) {
    const remainder = randomNumber % 2;
    console.log(remainder);
    if (remainder == 1) {
        console.log("ODD");
    }
    else {
        return false;
    }
}

console.log(isEven(45));
console.log(isODD(45));