
const actor = {
    name: 'Ananta',
    age: 30,
    phone: '012335567667',
    money: 235667567
}

// const phone = actor.phone;
// const age = actor.age;
// const money = actor.money;

// const { phone } = actor; 
// const { phone, age } = actor;
const { phone, age: boyos } = actor;
//if right side is an object left side of destructuring will be object as well
// use property name as a variable that contains the property value 


console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
// console.log(age);
// console.log(age);
// console.log(age);
console.log(boyos);
console.log(boyos);


//  array destructuring

const numbers = [45, 99];
const [first, second] = numbers;
const [x, y] = [12, 66];

// function 

function doubleThem(a, b) {
    return [a * 2, b * 2];
}

const [prothom, ditio] = doubleThem(6, 9);
console.log(prothom, ditio);