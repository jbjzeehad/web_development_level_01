function reverseString(text) {
    let rev = '';
    for (let i = text.length; i >= 0; i--) {
        const element = text[i];
        console.log(element);
        rev += element;
    }
    return rev;
}
const mySreing = 'I am a good boy';
const reversed = reverseString(mySreing);
console.log(reversed);