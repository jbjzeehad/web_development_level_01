const names = ['abul', 'babul', 'kabul', 'babul', 'chulbul', 'lablu', 'tulbul', 'abul', 'abul', 'babul', 'kabul', 'lanul'];

function remoteDupicate(names) {
    const uniquenames = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        console.log(name);
        if (uniquenames.includes(name) === false) {
            uniquenames.push(name);
        }
    }
    return uniquenames;
}
const unik = remoteDupicate(names);
console.log(unik);