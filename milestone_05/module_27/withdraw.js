// console.log("Ok ");

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const depositfield = document.getElementById('withdraw-field');
    const newdepoamntstring = depositfield.value;
    const newdepoamnt = parseFloat(newdepoamntstring);
    depositfield.value = '';
    // console.log(newdepoamnt);
    const chngedeposit = document.getElementById('withdraw-total');
    const depositstring = chngedeposit.innerText;
    const depositvalue = parseFloat(depositstring);

    const depototal = depositvalue + newdepoamnt;
    chngedeposit.innerText = depototal;


    const balancefield = document.getElementById('balance-total');
    const balancefieldstring = balancefield.innerText;
    const balancefieldvalue = parseFloat(balancefieldstring);
    const balanceamount = balancefieldvalue - newdepoamnt;
    balancefield.innerText = balanceamount;



})