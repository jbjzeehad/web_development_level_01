// console.log("From deposit brother");
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('deposit button clicked');
    const dpofield = document.getElementById('deposit-field');
    const newdepo = dpofield.value;
    const newdepofloat = parseFloat(newdepo);
    // console.log(depo);

    const dpelmnt = document.getElementById('deposit-total');
    const prevdpototal = dpelmnt.innerText;
    const prevdpototalfloat = parseFloat(prevdpototal);

    const currenttotal = prevdpototalfloat + newdepofloat;
    dpelmnt.innerText = currenttotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const prebalanceTotalString = balanceTotalElement.innerText;
    const prebalanceTotal = parseFloat(prebalanceTotalString);

    const currenbalancettotal = prebalanceTotal + newdepofloat;

    balanceTotalElement.innerText = currenbalancettotal;



    dpofield.value = '';
})