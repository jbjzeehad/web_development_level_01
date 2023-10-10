console.log("pawa geche");

function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function displayUsers(data) {
    // console.log(data);
    // for (const user of users) {
    //     console.log(user.name);
    // }
    const ul = document.getElementById('users-list');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}