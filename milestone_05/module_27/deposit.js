// console.log("Ok ");

document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositfield = document.getElementById('depo-field');
    const newdepoamntstring = depositfield.value;
    const newdepoamnt = parseFloat(newdepoamntstring);
    depositfield.value = '';
    // console.log(newdepoamnt);
    const chngedeposit = document.getElementById('deposit-total');
    const depositstring = chngedeposit.innerText;
    const depositvalue = parseFloat(depositstring);

    const depototal = depositvalue + newdepoamnt;
    chngedeposit.innerText = depototal;


    const balancefield = document.getElementById('balance-total');
    const balancefieldstring = balancefield.innerText;
    const balancefieldvalue = parseFloat(balancefieldstring);
    const balanceamount = newdepoamnt + balancefieldvalue;
    balancefield.innerText = balanceamount;



})