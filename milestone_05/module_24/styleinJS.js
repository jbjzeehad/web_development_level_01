const sections = document.querySelectorAll('section');
// console.log(sections);
for (const sec of sections) {
    sec.style.border = '2px solid steelblue';
    sec.style.marginBottom = '5px';
    sec.style.borderRadius = '15px';
    sec.style.paddingLeft = '7px';
    sec.style.paddingLeft = '7px';
    sec.style.backgroundColor = 'lightgray';
    sec.style.fontS = 'lightgray';

}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'indigo';

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');
// placesContainer.childNodes;
