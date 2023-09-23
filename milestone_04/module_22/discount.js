function ticketPrice(number) {
    const frstRate = 100;
    const scndRate = 90;
    const thrdRate = 70;
    if (number <= 100) {
        const price = number * frstRate;
        return price;
    }
    else if (number <= 200) {
        const frst100price = 100 * frstRate;
        const restticketqntaty = number - 100;
        const restticketprice = restticketqntaty * scndRate;
        const totalprice = frst100price + restticketprice;
        return totalprice;
    }
    else {
        const frst100price = 100 * frstRate;
        const scnd100price = 100 * scndRate;
        const restticketqntaty = number - 200;
        const restticketprice = restticketqntaty * thrdRate;
        const totalcost = frst100price + scnd100price + restticketprice;
        return totalcost;
    }
}

const price = ticketPrice(120);
console.log(price);