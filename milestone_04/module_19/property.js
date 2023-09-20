var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 24
}

console.log(shoppingCart);
// when you know the property name, use dot notation
var perCount = shoppingCart.pen;
console.log(perCount);
var perCount2 = shoppingCart['pen'];
console.log(perCount2);
// 
var properties_keys = Object.keys(shoppingCart);
var properties_values = Object.values(shoppingCart);
console.log(properties_keys);
console.log(properties_values);
// 
var prop_name = 'mouse';
var prop_values = shoppingCart[prop_name];
console.log(prop_name, prop_values);
// 
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 19;
console.log(shoppingCart);
