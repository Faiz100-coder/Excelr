class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("hey welcome to bangalore", this.name)
    }
}
// extends 
class students extends Person {

}
let st1 = new students("xyz")
st1.greet();



// simple example for inheretence 

class student {

    constructor(std) {
        this.std = std;




    }
    greed() {
        console.log("welcome to hydrabad ", this.std)
    }
}
class stdent extends student {

}
let st2 = new stdent("faizan")
st2.greed();

// example 

class Persons {

    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("this is form the parent class", this.name);


    }
}
class studentss extends Persons {


}
st3 = new studentss("faizanahmed")
st3.greet();
