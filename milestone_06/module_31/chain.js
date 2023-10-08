// data access
// optional chaining

const data = [{ id: 1, name: 'abul', address: 'kochu khet' }];

console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenevo', price: 7000 },
        { id: 2, name: 'oppo', price: 57000 }
    ]
}
console.log(products.data[0].name);

const user = {
    id: 4000,
    name: 'sariful',
    add: {
        street: {
            first: '54/1 uttora',
            second: 'poribager goli',
            third: 'nodira'
        },
        city: 'Dhaka'
    }
}

console.log(user.add.street.second);