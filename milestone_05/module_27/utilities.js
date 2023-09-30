
function getinputvaluebyid(inpufieldtid) {
    const inputField = document.getElementById(inpufieldtid);
    const inputFieldvaluestring = inputField.value;
    const inputFieldvalue = parseFloat(inputFieldvaluestring);
    inputField.value = '';
    console.log(inputFieldvalue);
    return inputFieldvalue;
}

function getelementvaluebyid(elementid) {
    const element = document.getElementById(elementid);
    const elementvaluestring = element.innerText;
    const txtelementFieldvalue = parseFloat(elementvaluestring);
    return txtelementFieldvalue;
}
function setelmntvalue(elmntid, newvalue) {
    const textelement = document.getElementById(elmntid);
    textelement.innerText = newvalue;
}