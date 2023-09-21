

function mulofnumbers(value) {
    let mul = 1;
    for (let i = 1; i <= value; i++) {
        mul *= i;
        console.log(i, mul);
    }
    return mul;
}
mulofnumbers(3);


function ultomulofnumbers(value) {
    let mul = 1;
    for (let i = value; i >= 1; i--) {
        mul *= i;
        console.log(i, mul);
    }
    return mul;
}
ultomulofnumbers(4);