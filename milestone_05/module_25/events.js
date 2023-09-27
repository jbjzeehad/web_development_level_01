console.log('This is separate JS file');

// button blue

const makebluebutton = document.getElementById('make-blue');
console.log(makebluebutton);
makebluebutton.onclick = makebu;

function makebu() {
    document.body.style.backgroundColor = 'blue';
}
// button purple

const makeprplebutton = document.getElementById('make-purple');
console.log(makeprplebutton);
makeprplebutton.onclick = function makeprp() {
    document.body.style.backgroundColor = 'purple';
}

// button pink

const makepinkbutton = document.getElementById('make-pink');
console.log(makepinkbutton);
makepinkbutton.addEventListener('click', makepink);

function makepink() {
    document.body.style.backgroundColor = 'pink';
}

// button green

const makegrnbutton = document.getElementById('make-green');
console.log(makegrnbutton);
makegrnbutton.addEventListener('click', function makegreen() {
    document.body.style.backgroundColor = 'green';
});

// button orange >> most of the time we are using

document.getElementById('make-orange').addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange';
});