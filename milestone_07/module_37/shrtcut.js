// '', 0 , false , null, undefined

let myvar = 5;
if (myvar) {
    myvar = myvar * 100;
}
else {
    myvar = 0;
}
let mymoney = 50;
if (!mymoney) {

}
// ternary

let food = mymoney > 100 ? 'biriani' : 'cha biscuit';
// shrtcut
const input = '560';
console.log(typeof (input));
const inputNum = +input;
console.log(typeof (inputNum));
// shrtcut
let isActive = true;
const a = () => console.log('display User');
const b = () => console.log('hide User');
isActive ? a() : b();
isActive && a();

isActive = !isActive;