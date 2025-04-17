// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log("hey welcome to bangalore", this.name)
//     }
// }
// // extends 
// class students extends Person {

// }
// let st1 = new students("xyz")
// st1.greet();



// // simple example for inheretence 

// class student {

//     constructor(std) {
//         this.std = std;




//     }
//     greed() {
//         console.log("welcome to hydrabad ", this.std)
//     }
// }
// class stdent extends student {

// }
// let st2 = new stdent("faizan")
// st2.greed();

// example ---------

// class Persons {

//     constructor(name, s) {
//         this.name = name;
//         this.s = s;
//     }
//     greet() {
//         console.log("this is form the parent class", this.name);


//     }

// }
// class studentss extends Persons {
//     constructor(personname, studentname) {
//         super(personname)
//         this.studentname = studentname
//         console.log("the student nmae is ", this.studentname)
//         // super.greet()
//     }
//     greet() {
//         console.log("this is from extends person (child)  class", this.studentname)

//     }
//     greetboth() {
//         super.greet()
//         this.greet();
//     }


// }
// st3 = new studentss("faizanahmed", "faiz")
// st3.greetboth()



//this is the example of the simple inheritance in oops
// this is parent class

// class manager {

//     constructor(name, salary) {

//         this.name = name;
//         this.salary = salary;

//     }
//     greeting() {
//         console.log(" welcome the company ", this.name);
//     }
//     income() {
//         console.log("my salary is ", this.salary);
//     }

// }

// // let's create the child class

// class employee extends manager {
//     constructor(name, salary) {
//         super(name, salary)

//         console.log("hello")
//     }

// }

// let msg = new employee("faizan ahmed ", 324)
// msg.greeting();
// msg.income();

//------------------------------------------------------

// example for the car manufacturing company 
// child frachise  

class car {
    constructor(carname) {
        this.carname = carname;
        // this.modelno = modelno;
    }
    congrats() {

        console.log("the car name is ", this.carname);
    }
}
class frachise extends car {
    constructor(carname, modelno) {
        super(carname)
        this.modelno = modelno
        // super.congrats();
        console.log("the model number is ", this.modelno);
    }

}
st1 = new frachise("toyota", 54673533)
st1.congrats();