const user = { id: 1, name: 'Gorib Aamir', job: 'actor' };

const stringified = JSON.stringify(user);

console.log(stringified);

const shop = {
    owner: 'alia',
    address: {
        street: 'Kochukhet voot er goli',
        city: 'ranvir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyoard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};

// console.log(shop);
const shopJson = JSON.stringify(shop);
// console.log(shopJson);
const shopJsonobject = JSON.parse(shopJson);
console.log(shopJsonobject);