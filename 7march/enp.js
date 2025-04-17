// encapsulation  hiding the actulal implimentatrio n
// abstraction  showing only the necessary information
// inheritance  inheriting the properties of a class
// polymorphism  having multiple forms

// there are the 3 concepts 



// public 

class car {
    constructor(brand) {

        this.brand = brand;
    }
    showBrand() {
        console.log("this is the brand name ", this.brand);

    }
}
let obj1 = new car("toyota");
console.log(obj1.brand);
obj1.showBrand();



// private  private class is shown as # symbole 
// private class is alswals written in a within a class 

class cars {

    cus_name;
    constructor(brand, cus_name) {
        this.brand = brand;
        this.cus_name = cus_name;
    }
    showBrand() {
        console.log("this is the brand name ", this.brand, this.cus_name);

    }
}
let obj2 = new cars("tata", "john");
console.log(obj2.brand);
obj2.showBrand();