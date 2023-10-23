function getSomething() {
    return [25, 96];
}
console.log(getSomething()); // output : [25,96]

const [a, b] = getSomething();

console.log([a, b]); // output : [25,96]

function getSomething2(num) {
    function innerThing(value) {
        num = value;
    }
    return [num, innerThing];
}

const [cnt, setcnt] = getSomething2(5)