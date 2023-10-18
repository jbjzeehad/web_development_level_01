// console.log("connection paiche"); >> for check the connection
// akta ES6 function creat korlam data anar jonno fetch dia. 
const loadphone = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await response.json(); //json a convert korchi

    // console.log(data.data); data variable er vitor j datagulo ache se gulo dekhar jonno.
    const phones = data.data; // same amra just new akta variable a nilam erpor console log dilam dekhar jonno
    console.log(phones);


}
loadphone(); // call korlam function k data gulo console a dekhar jonno.