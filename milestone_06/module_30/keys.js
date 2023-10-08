
const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};
console.log(glass);
const keys = Object.keys(glass); // all properties name
console.log(keys);

const values = Object.values(glass); // alll values name
console.log(values);

const pair = Object.entries(glass);
console.log(pair);
// Output : (Array of array)/2D array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
// ]

// delete glass.isCleaned;
// console.log(glass);

const { isCleaned, ...shortGlass } = glass; //****
console.log(shortGlass);

Object.freeze(glass);
glass.source = 'Bangladesh';
console.log(glass);

Object.seal(glass);
console.log(glass);
