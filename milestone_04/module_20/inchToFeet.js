
const myInch = 12;
const myFeet = myInch / 12;
console.log(myFeet);

function inchTOFeet(inches) {

    const myFeet = inches / 12;
    return myFeet;
}
const dadaInches = 155;
const dadafeet = inchTOFeet(dadaInches);
console.log(dadafeet);
console.log(inchTOFeet(45));

function milesTokilo(mile) {
    const kilo = mile * 1.609;
    return kilo;
}
console.log(milesTokilo(45));