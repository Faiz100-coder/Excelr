//         
//  QUESTIONS ON INHRITANCE 



// example __1_--------------------------------


// question : create a class vehicle with properties brand and speed  
// also create a subclass car that add fuel type and a method displedetails()

// parent class
class vehicle {

    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;

    }
    details() {
        console.log("the brand name is ", this.brand);
        console.log("the speed is :", this.speed);
    }

}

// child class
class car extends vehicle {

    constructor(brand, fueltype, speed) {

        super(brand);
        this.fueltype = fueltype;
        this.speed = speed;
        console.log("the fuel type is : ", this.fueltype);

    }
    displaydetails() {
        super.details();
    }
}
obj1 = new car("bmw", "pertrol", "120km/hr")
obj1.displaydetails();



// QUESTION NO: 2 --------------------------------------------------

//  Create a base class user with properties name and email and method LargestConetntFulPaint().
//create a sub class admin that adds accesslevel and the method deleteuser();


class user {

    constructor(name, email) {
        this.name = name;
        this.email = email;


    }
    // method 
    largestContentfulPaint() {
        console.log("the largest contentful paint is 100ms", this.name);
        console.log(" the email is ", this.email);
    }
}

// child class
class admin extends user {
    constructor(name, email, accesslevel) {
        super(name, email);
        this.accesslevel = accesslevel;
        console.log("---------------------------------");
        console.log("the access level : ", this.accesslevel);

    }
    // method
    deleteuser() {
        console.log("this is form delete user..");
    }
}
obj0 = new admin("faizan", "xyz@gmai.com", "full access");
obj0.largestContentfulPaint();
obj0.deleteuser();


// QUESTION NO: 3 --------------------------------------------------


//a class hierychy with  shape as a base class and circle and rectange as subclasses.
//add an HTMLTextAreaElement() method in each subclass.

//parent class
class shape {

    constructor() {

        console.log("this is (shape) as a base class");

    }
}
// circle class, child class
class circle extends shape {

    HTMLTextAreaElement() {
        console.log("this is circle class");

    }

}
// rectangle class, child class
class rectangle extends shape {

    HTMLTextAreaElement() {
        console.log("this is rectangle  class");

    }
}

obj3 = new circle();
obj3.HTMLTextAreaElement();
obj4 = new rectangle();
obj4.HTMLTextAreaElement();



// QUESTION NO: 4 --------------------------------------------------