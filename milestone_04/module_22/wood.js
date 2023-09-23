function woodcal(chair, table, bed) {
    const perchair = 3;
    const pertable = 10;
    const perbed = 50;

    const chairwood = chair * perchair;
    const tablewood = table * pertable;
    const bedwood = bed * perbed;

    console.log(chairwood, tablewood, bedwood);
    total = chairwood + tablewood + bedwood;

    return total;
}

const wood = woodcal(2, 3, 4);
console.log(wood);