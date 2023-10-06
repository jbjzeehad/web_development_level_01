
const max = Math.max(5, 6, 7, 8, 9, 3, 65, 3);
console.log(max);

const numbers = [3, 5, 6, 7, 5, 34, 6, 6, 34];
console.log(numbers);
console.log(...numbers);

const arraymax = Math.max(...numbers);
console.log(arraymax);

const friends = [12, 4, 45, 78];
const bondhu = friends;
const dosto = [...friends]; //copy
console.log(dosto);
friends.push(100);
console.log(dosto);
console.log(friends);

const songkha = [...friends, 9999]; //add extra elements while copy
console.log(songkha);




