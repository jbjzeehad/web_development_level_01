// // localStorage.setItem('userId', 3456678);

// const addlocalstorage = () => {
//     const idInput = document.getElementById('storage-id');
//     const id = idInput.value;
//     const valueInput = document.getElementById('storage-value');
//     const value = valueInput.value;

//     if (id && value) {
//         localStorage.setItem(id, value);

//     };

//     idInput.value = '';
//     valueInput.value = '';

// }
const nameh = 'Hero';
const age = 34;
const person = { nameh, age };
console.log(person);


const adventurer = { name: 'Alice', cat: { name: 'Lucy' } };
const ratName = adventurer?.rat?.name;
console.log(ratName);