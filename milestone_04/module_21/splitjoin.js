
const lyrics = 'tumi bonshu kala. pakhi ami jno ki';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
console.log(sentences);
console.log(parts);
const partial = lyrics.slice(5, 8);
const partialparts = lyrics.substring(5, 8);
console.log(partial);
console.log(partialparts);
const lines = ['tumi bonshu', 'kala pakhi', 'ami jeno ki', 'bosonto kale tomae', 'vulte pari ni'];
const newsong = lines.join(':');
console.log(newsong);