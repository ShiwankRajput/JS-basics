/*

CLASSES -----> Class is a program-code template for creating objects.

Those objects will have some state (variables) & some behaviour (functions) inside it.
Class is a program-code template for creating objects.

class MyClass {

    constructor( ) { ... }

    myMethod( ) { ... }

}

let myObj = new MyClass( ) ;




CONSTRUCTOR ---> 

Constructor( ) method is :
1_) automatically invoked by new
2) initializes object

*/


class ToyotaCar{
    constructor(brand,mileage){
        this.mileage = mileage;
        this.brand = brand;
    }
    start(){
        console.log("car is starting");
    }
    stop(){
        console.log("car is stoping");
    }
}

let fortuner = new ToyotaCar("fortuner",10);
console.log(fortuner);
let lexus = new ToyotaCar(20);
console.log(lexus);