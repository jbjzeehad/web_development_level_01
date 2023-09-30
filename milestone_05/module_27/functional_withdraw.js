// console.log('okokok');

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newdepoamnt = getinputvaluebyid('withdraw-field');
    const predepototal = getelementvaluebyid('withdraw-total');
    const newdpototal = predepototal + newdepoamnt;
    setelmntvalue('withdraw-total', newdpototal);
    const prebalancetotal = getelementvaluebyid('balance-total');
    const total = prebalancetotal - newdepoamnt;
    setelmntvalue('balance-total', total);
})