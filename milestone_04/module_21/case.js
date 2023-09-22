
const username = 'blackpink';
const userInput = 'blackPinK';
console.log(username.toLocaleLowerCase());

if (username.toLowerCase() === userInput.toLowerCase()) {
    console.log('valid User');
}
else {
    console.log('Invalid user');
}