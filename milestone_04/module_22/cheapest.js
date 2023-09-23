const phones = [{ name: 'samsung', camera: 12, storage: '32gb', price: 135000, color: 'silver' },
{ name: 'walton', camera: 12, storage: '32gb', price: 85000, color: 'silver' },
{ name: 'iphone', camera: 12, storage: '32gb', price: 45000, color: 'silver' },
{ name: 'xaomi', camera: 12, storage: '32gb', price: 65000, color: 'silver' },
{ name: 'oppo', camera: 12, storage: '32gb', price: 135000, color: 'silver' },
{ name: 'nokia', camera: 12, storage: '32gb', price: 37000, color: 'silver' },
{ name: 'htc', camera: 12, storage: '32gb', price: 35000, color: 'silver' }];
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phn = phones[i];
        if (phn.price < cheapest.price) {
            cheapest = phn;
        }
    }
    return cheapest
}


console.log(cheapestPhone(phones));