const numbers = [45, 65, 23, 98, 19];

for (const number of numbers) {
    console.log(number);

}
const products = [
    { id: 1, name: 'xiameeo', price: 9912099 },
    { id: 2, name: 'dfefexiamo', price: 9912099 },
    { id: 3, name: 'ffdfxiamo', price: 7812099 },
    { id: 4, name: 'dfdfxiamo', price: 78712099 },
    { id: 5, name: 'xiamfdfdo', price: 8712099 },
    { id: 6, name: 'xiamdfdfo', price: 1267099 },
    { id: 7, name: 'xidfamo', price: 120699 },
    { id: 8, name: 'xiamfgro', price: 1204599 },

]
for (const product of products) {
    console.log(product);
}

function matchedProducts(products, search) {
    for (const product of products) {
        console.log(product);
    }
}
const result = matchedProducts(products, 'phone');
console.log(result);

const a = 0;
console.log(2 / a);