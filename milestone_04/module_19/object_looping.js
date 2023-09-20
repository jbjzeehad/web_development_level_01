var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 24,
    shoes: 2,
    bottle: 1
}
const keys_name = Object.keys(shoppingCart);
// console.log(keys_name);
const values_name = Object.values(shoppingCart);
// console.log(values_name);

// console.log(keys_name, "=", values_name);

for (var i = 0; i < keys_name.length; i++) {
    var k_name = keys_name[i];
    var k_value = shoppingCart[k_name];
    console.log(k_name, k_value);
}
// only key 
for (var proname in shoppingCart) {
    console.log(proname);
}
// key with  value
for (var proname in shoppingCart) {
    var proval = shoppingCart[proname];
    console.log(proname, proval);
}