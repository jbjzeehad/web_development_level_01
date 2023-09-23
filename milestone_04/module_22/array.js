
const country = 'Bangladesh';
const age = 52;
const isInd = true;
const student = { id: 121, class: 11, name: "agun" };
const friends = [12, 20, 34, 23, 34, 45, 56];

function add(num1, num2) {

}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isInd);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(Array.isArray(student));
console.log(typeof add);
// console.log(typeof);
console.log(friends.includes(19));
console.log(friends.indexOf(34));
const newfriend = [6, 4, 32, 88, 93, 45, 33];
const allfr = newfriend.concat(friends);
console.log(allfr);