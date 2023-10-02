// console.log("working");

function calTraingleArea() {
    // console.log('button clicked');
    const basefield = document.getElementById('traingle-base');
    const basevaluetext = basefield.value;
    const base = parseFloat(basevaluetext);
    console.log(base);
    const hfield = document.getElementById('traingle-height');
    const hvaluetext = hfield.value;
    const high = parseFloat(hvaluetext);
    console.log(high);

    const area = 0.5 * base * high;
    console.log(area);
    if (isNaN(base) || isNaN(high)) {
        alert('Plz insert a number');
        return;
    }
    const areafield = document.getElementById('tri-area');
    areafield.innerText = area;
    addcalentry('Triangle:', area);
}

function calparallelogramArea() {
    // console.log('button clicked');
    const basefield = document.getElementById('par-base');
    const basevaluetext = basefield.value;
    const base = parseFloat(basevaluetext);
    console.log(base);
    const hfield = document.getElementById('par-height');
    const hvaluetext = hfield.value;
    const high = parseFloat(hvaluetext);
    console.log(high);

    const area = base * high;
    console.log(area);
    const areafield = document.getElementById('par-area');
    areafield.innerText = area;
}

function calrectangleArea() {
    // console.log('button clicked');
    const basefield = document.getElementById('rectangle-width');
    const basevaluetext = basefield.value;
    const base = parseFloat(basevaluetext);
    console.log(base);
    const hfield = document.getElementById('rectangle-length');
    const hvaluetext = hfield.value;
    const high = parseFloat(hvaluetext);
    console.log(high);

    const area = base * high;
    console.log(area);
    const areafield = document.getElementById('rect-area');
    areafield.innerText = area;
}

function getinputvalue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputvalueText = inputField.value;
    const value = parseFloat(inputvalueText);
    return value;
}

function calpentagonArea() {
    // console.log('button clicked');
    const pfield = getinputvalue('p-width');
    const bfield = getinputvalue('b-width');
    const area = 0.5 * pfield * bfield;
    const areafield = document.getElementById('penta-area');
    areafield.innerText = area;
}
function calrArea() {
    // console.log('button clicked');
    const pfield = getinputvalue('d1-width');
    const bfield = getinputvalue('d2-width');
    const area = 0.5 * pfield * bfield;
    const areafield = document.getElementById('r-area');
    areafield.innerText = area;
}

function setElementInnerText(setId, value) {
    const element = document.getElementById(setId);
    element.innerText = value;
}
function caleArea() {
    // console.log('button clicked');
    const pfield = getinputvalue('a');
    const bfield = getinputvalue('b');
    const area = 3.1416 * pfield * bfield;
    const areafield = setElementInnerText('e-area', area);
}


/*
data Validation :
1. set the proper type of the input field. (number,data,email,text)
2. check type (typeof)
3. isNaN() not a number function




*/

function addcalentry(type, valuearea) {
    const cal = document.getElementById('cal-entry');
    const p = document.createElement('p');
    p.innerHTML = `${type} ${valuearea} cm<sup>2</sup>`;
    cal.appendChild(p);

}