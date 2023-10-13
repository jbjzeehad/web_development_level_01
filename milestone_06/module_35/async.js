console.log(1)
console.log(2)
setTimeout(() => {
    console.log("Lazy logged");
}, 4000);
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
console.log(4)
console.log(5)
console.log(6)
function doSomething() {
    console.log(3);
}