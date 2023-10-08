
const numbers = [1, 5, 6, 4, 15];
const players = [34, 66, 78, 45, 6, 7, 66];
const selected = players.filter(p => p > 1);
const selected1 = players.filter(p => p > 10);
const selected2 = players.filter(p => p > 50);
const selected3 = players.filter(p => p > 1000);
console.log(selected);
console.log(selected1);
console.log(selected2);
console.log(selected3);