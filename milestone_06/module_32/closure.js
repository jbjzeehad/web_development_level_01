function kitchen() {
    let roast = 0;
    return function () {
        roast++;
        return roast;
    }

}
console.log(kitchen());