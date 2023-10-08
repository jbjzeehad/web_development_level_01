const numbers = [1, 6, 8, 4];
for (const num of numbers) {
    // console.log(num);
}

const nobab = 'siraj ud duola';

for (const char of nobab) {
    console.log(char);
}

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};

for (const obkey in glass) {
    console.log(obkey);
    const obvalue = glass[obkey];
    console.log(obkey, obvalue);
}