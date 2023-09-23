function cubeNumber(number) {
    if (typeof number !== 'number') {
        return 'Invalid! input a number.';
    }
    let result = Math.pow(number, 3);
    return result;
}

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Invalid! input both string.';
    }
    if (string1.includes(string2)) {
        return true;
    }
    else {
        return false;
    }
}

function sortMaker(arr) {
    if (arr[0] < 0 || arr[1] < 0) {
        return 'Invalid Input';
    }
    if (arr[0] === arr[1]) {
        return 'equal';
    }
    let newarr = [];
    if (arr[0] < arr[1]) {
        newarr[0] = arr[1];
        newarr[1] = arr[0];
        return newarr;
    }
    else {
        return arr;
    }
}

function findAddress(obj) {
    let streetadd = obj.street;
    if (typeof streetadd == 'undefined') {
        streetadd = "__";
    }
    let houseadd = obj.house;
    if (typeof houseadd == 'undefined') {
        houseadd = "__";
    }
    let societyadd = obj.society;
    if (typeof societyadd == 'undefined') {
        societyadd = "__";
    }
    let finaladd = streetadd + "," + houseadd + "," + societyadd;
    return finaladd;
}

function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "No Money!";
    }
    let totalmoney = 0;
    for (let i = 0; i < changeArray.length; i++) {
        totalmoney += changeArray[i];
    }
    if (totalmoney >= totalDue) {
        return true;
    }
    else {
        return false;
    }
}

// check function
// -----------------------------------
// console.log(cubeNumber(3));
// console.log(cubeNumber(4));
// console.log(cubeNumber(-3));
// console.log(cubeNumber(0));
// console.log(cubeNumber('3'));
// console.log(cubeNumber(true));
// console.log(cubeNumber('joy'));
// ------------------------------------
// console.log(matchFinder('joy', 1));
// console.log(matchFinder(2, 'bijoy'));
// console.log(matchFinder(2, 3));
// console.log(matchFinder('bijoy', 'joy'));
// console.log(matchFinder('John Doe', 'ohn'));
// console.log(matchFinder('JavaScript', 'Scr'));
// console.log(matchFinder('Peter Parker', 'ker'));
// console.log(matchFinder('Peter Parker', ' Par'));
// -------------------------------------------------
// let ara1 = [0, 1];
// let ara2 = [-4, 4];
// let ara3 = [4, -4];
// let ara4 = [4, 3];
// let ara5 = [4, -5];
// let ara6 = [2, 3];
// let ara7 = [4, 2];
// let ara8 = [4, 4];
// let ara9 = [1, 2];
// let ara10 = [4, -2];
// let ara11 = [1, 0];
// console.log(sortMaker(ara1));
// console.log(sortMaker(ara2));
// console.log(sortMaker(ara3));
// console.log(sortMaker(ara4));
// console.log(sortMaker(ara5));
// console.log(sortMaker(ara6));
// console.log(sortMaker(ara7));
// console.log(sortMaker(ara8));
// console.log(sortMaker(ara9));
// console.log(sortMaker(ara10));
// console.log(sortMaker(ara11));
// ----------------------------------------------

// let add = { street: 10, house: "15A", society: "Earth Perfect" };
// let add1 = { house: "15A", society: "Earth Perfect" };
// let add2 = { street: 11, society: "Only Perfect" };
// let add3 = { street: 12 };
// let add4 = {};
// console.log(findAddress(add));
// console.log(findAddress(add1));
// console.log(findAddress(add2));
// console.log(findAddress(add3));
// console.log(findAddress(add4));
// ------------------------------------------

// let money = [2, 4, 5];
// let money1 = [1, 2, 5];
// let money2 = [1, 5, 5];
// let money3 = [];
// let price = 10;
// console.log(canPay(money, price));
// console.log(canPay(money1, price));
// console.log(canPay(money2, price));
// console.log(canPay(money3, price));