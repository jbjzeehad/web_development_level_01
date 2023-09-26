console.log('append ja');
//  where to add 
const plclist = document.getElementById('places-list');
// console.log(plclist);
// what to be added
const li = document.createElement('li');
li.innerText = 'phartoli bon';
// add the child
plclist.appendChild(li);

const maincont = document.getElementById('main-content');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'MOglai biriyani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Slada';
ul.appendChild(li3);

section.appendChild(ul);
maincont.appendChild(section);


// set innerHTml directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
<li>T-Shirt</li>
<li>Punjabi</li>
<li>Pajama</li>
</ul>
`
maincont.appendChild(sectionDress);