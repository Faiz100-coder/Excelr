// // encapsulation  hiding the actulal implimentatrio n
// // abstraction  showing only the necessary information
// // inheritance  inheriting the properties of a class
// // polymorphism  having multiple forms

// // there are the 3 concepts 



// // public 

// class car {
//     constructor(brand) {

//         this.brand = brand;
//     }
//     showBrand() {
//         console.log("this is the brand name ", this.brand);

//     }
// }
// let obj1 = new car("toyota");
// console.log(obj1.brand);
// obj1.showBrand();



// // private  private class is shown as # symbole 
// // private class is alswals written in a within a class 

// class cars {
//     // always written within the class 
//     #cus_name;
//     constructor(brand, cus_name) {
//         this.brand = brand;
//         this.#cus_name = cus_name;
//     }
//     showBrand() {
//         console.log("this is the brand name ", this.brand, this.#cus_name);

//     }
// }
// let obj2 = new cars("tata", "john");
// console.log(obj2.brand);
// obj2.showBrand();



// encapsulation question for practice 

// make a class thermostat with temperature DataTransfer.Allow setting  and getting temperature in celsius,but Fahrenheit to the user

// class Thermostat {
//     #celsius
//     constructor(celsius, fahrenheit) {
//         this.#celsius = celsius;
//         this.fahrenheit = fahrenheit;
//     }
//     // getter method for the temperature to fahrenheit
//     gettempereture(celsius) {

//         console.log("temperature : faranite to celcius is : ", this.#celsius * 9 / 5) + 32;
//     }
//     // setter method for the temperature to celsius
//     settempereture(fahrenheit) {
//         console.log("the celsius to faranite is ", this.fahrenheit = (fahrenheit - 32) * 5 / 9);
//     }


// }
// let obj = new Thermostat(30);
// obj.gettempereture();
// obj.settempereture();





class Car {
    // always written within the class 
    #speed;
    constructor(brand, speed) {
        this.brand = brand;
        this.#speed = speed;
        console.log("this is the brand name ", this.brand);
    }

    accelerate() {

        console.log("the speed is : ", this.#speed);
    }
    brake() {
        console.log("brake method called ");
    }
    getspeed() {
        console.log("the speed is  :", this.#speed);
    }
}
let obj2 = new Car("tata", "120km/hr");
// console.log(obj2.S#speed);
obj2.accelerate();
obj2.brake();
obj2.getspeed();
// console.log(obj2.#speed); 

