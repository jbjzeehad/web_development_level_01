class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move() {
        console.log('gari chole na chole na');
    }
}

class Bus extends Vehicle {
    constructor(name, price, seat, tckt) {
        super(name, price);
        this.seat = seat;
        this.tckt = tckt;
    }

}

class Truck extends Vehicle {
    constructor(name, price, load) {
        super(name, price);
        this.load = load;
    }
}