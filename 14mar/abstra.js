// abstraction
// showing the result by hinding the implimentation
// hide
// hide the unwanted thing
// show essential details 
// this is how abstraction works in programming 


/*
function employee(id, name, basesalary) {
    this.id = id;
    this.name = name;
    this.basesalary = basesalary;
    // this.mbonus = 5000; // we can also write usign this keyword 

    let mbonus = 5000;

    let calculateSalary = function () {

        console.log(" the  bonus is : ", mbonus)
        let salry = basesalary + mbonus;
        console.log("the salary with bonus is : ", salry)
        console.log("---------------------------------------")
    }
    this.getEmpDetails = function () {
        console.log("employee id is:", this.id);
        console.log("employee name is:", this.name);
        console.log("employee salary is:", this.basesalary);
        // we need to call inside the function to calculate the salary 
        calculateSalary();
    }
}

let a = new employee(123, "faizan", 50000);
a.getEmpDetails();
// a.calculateSalary();

let b = new employee(1245, "faiz", 30000)
b.getEmpDetails();
// b.calculateSalary();

*/

////////------------------- PLOYMORPHISM -----------------
// POLY - MANY 
//  MORPHISM : FORMS 
//  POLYMORPHISM : MANY FORMS
//  POLYMORPHISM : MANY FORMS OF ONE THING

// class animal {
//     makesound() {
//         console.log("the animal makes a sound")
//     }
// }
// class Dog {
//     makesound() {
//         console.log(" dog barking ")
//     }
// }

// class Cat {
//     makesound() {

//         console.log("cat meow ")
//     }
// }

// let dog = new Dog()
// let cat = new Cat()
// dog.makesound();
// cat.makesound();



// same above program we can do with inhiritranc 
// we just need to use extends the properties of the parent class to the child class


/*
class animal {
    makesound() {
        console.log("the animal makes a sound")
    }
}
class Dog extends animal {
    makesound() {
        super.makesound(); // this is called the method overriding
        // java script does not support the overloading concept .
        // there are the build in method in js  but it does not support the overloading  
        console.log(" dog barking ")
    }
}

class Cat extends animal {
    makesound() {
        super.makesound();
        console.log("cat meow ")
    }
}

let dog = new Dog()
let cat = new Cat()
dog.makesound();
cat.makesound();

*/
// write a program where you have to create area and perimeter in the base class overidding concept with respeect to diffrent solod figures 


/*

Overriding	Redefining a parent class method in a child class.
super()	Calls the parent class constructor.
super.methodName()	Calls the parent class method (used inside overridden methods). */

/*
class Shape {
    area() {
        console.log("Calculating area...");
    }

    perimeter() {
        console.log("Calculating perimeter...");
    }
}

class rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;

    }
    area() {
        super.area();// this is method over riding 
        const form = this.length * this.width;
        console.log("Area of rectangle is ", form)
    }
    perimeter() {
        super.perimeter();// this is method over riding 
        const form = 2 * (this.length + this.width);
        console.log("Perimeter of rectangle is ", form)
    }
}
let obj = new rectangle(43, 54)

obj.area();
obj.perimeter();

*/



// write a program for promises 
/*        17 - 4 - 2025 
Promise
A promise is a result object that is used to handle asynchronous operations. It is used to handle the
result of an asynchronous operation, whether it is successful or failed.
*/
// Creating a promise
let promise = new Promise((resolve, reject) => {
    // code that takes some time
    setTimeout(() => {

        console.log("hellow ")
        resolve("Promise is resolved");
    }, 2000);
});
// then() method
promise.then((message) => {
    console.log(message);
});






let promisee = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hello ");
        resolve("Promise is resolved");
    }, 2000);
    promise.then(() => {

        reject("some thing went wrong ")
    })

})
