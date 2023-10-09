const products = [
    { id: 1, name: 'lenevo', price: 435000 },
    { id: 2, name: 'toplenevo', price: 456000 },
    { id: 3, name: 'minlenevo', price: 455000 },
    { id: 4, name: 'maxlenevo', price: 4655000 },
]

class Product {
    country = 'Bangladesh';
    constructor(name) {
        this.name = name;
    }
    speak(talk) {
        console.log(`talking about ${talk}`);
    }
}

const lenevo = new Product('lelelelel lenevo');
console.log(lenevo);
lenevo.speak('kita ko');

class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;

    }
    lecture() {
        console.log('Sir is teaching');
    }
}

const tapan = new Teacher('Shajahan Tapon Sir', 'Physics');
const rashid = new Teacher('Rashid Sir', 'English');
console.log(tapan);
console.log(rashid);
