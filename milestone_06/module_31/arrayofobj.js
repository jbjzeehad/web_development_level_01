const products = [
    { id: 1, name: 'lenevo', price: 435000 },
    { id: 2, name: 'toplenevo', price: 456000 },
    { id: 3, name: 'minlenevo', price: 455000 },
    { id: 4, name: 'maxlenevo', price: 4655000 },
]

const names = products.map(product => product.name);
const prices = products.map(p => p.price);
console.log(names);
console.log(prices);

products.forEach(p => console.log(p.id));

const exp = products.filter(p => p.price < 500000);
console.log(exp);

const eff = products.find(p => p.price > 3400000);
const total = products.reduce((acum, current) => acum + current.price, 0);
console.log(eff);
console.log(total);