
/*
class Bus extends Vehicle{} --> 
Vehicle a jegulo boisisto ase bus a oi gula thakbe ebong bus a vehicle er thekeo boisisto beshi thakbe.
jeta vehicle a add hobe.

--> super() method a parameter hishebe parent class ba Vehicle class er parameter gula pass korte hobe.
*/




class Vehicle{
    constructor(name,price){
        this.name=name;
        this.price=price;

    }

    move(){
        console.log('Vehicle is not moving');
    }
}

class Bus extends Vehicle{
    constructor(name,price,seat,ticketPrice){
        super(name,price);  // parent class/Vehicle class er constructor er parameter gula pass korte hobe
        this.seat=seat;
        this.ticketPrice=ticketPrice;
    }
}

class Truck extends Vehicle{
    constructor(name,price,weight){
        super(name,price); // parent class/Vehicle class er constructor er parameter gula pass korte hobe
        this.weight=weight;
    }
}