// class Vehicle{
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }
// }

// class Bus extends Vehicle{
//     constructor(name,price,seat,ticketPrice){
//         super(name,price);
//         this.seat = seat;
//         this.ticketPrice = ticketPrice;
//     }
// }

// let bike =new Bus('Car',100000);
// // console.log(bike);

class Vehicle{
    constructor(make, model, color){
        this.make = make;
        this.model = model;
        this.color = color;
    }
    getName(){
        return this.make + " " +this.model;
    }
}
let car = new Vehicle('Toyota','Corola','Black');
console.log(car);