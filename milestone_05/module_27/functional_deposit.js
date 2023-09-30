// console.log('okokok');

document.getElementById('btn-deposit').addEventListener('click', function () {
    const newdepoamnt = getinputvaluebyid('depo-field');
    const predepototal = getelementvaluebyid('deposit-total');
    const newdpototal = predepototal + newdepoamnt;
    setelmntvalue('deposit-total', newdpototal);
    const prebalancetotal = getelementvaluebyid('balance-total');
    const total = prebalancetotal + newdepoamnt;
    setelmntvalue('balance-total', total);
})