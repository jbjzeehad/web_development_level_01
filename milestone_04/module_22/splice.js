const friends = [12, 234, 45, 54, 676, 8, 79, 854, 543];
const partial = friends.splice(2, 3);
const partialadd = friends.splice(2, 3, 10, 20, 30);
console.log(partial);
console.log(partialadd);
console.log(friends);