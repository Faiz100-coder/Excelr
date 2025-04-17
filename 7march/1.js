console.log("hi ");


// contract company 
// using dnamic method 
class contractcompany {
    constructor(name, empid, city, role, salary) {
        this.name = name;
        this.empid = empid;
        this.city = city;
        this.role = role;
        this.salary = salary;
    }
    // method to display employee details
    greet() {

        console.log("welcome to the company", this.name, this.empid, this.city, this.role, this.salary);
    }
}
let obj1 = new contractcompany("faizan", "1221", "parbhani", "software developer", "50000")
// let obj2 = new Person("ahmed", "b")
console.log(obj1.name, obj1.city, obj1.empid, obj1.city, obj1.role, obj1.salary);
obj1.greet()

// console.log(obj1.name, obj1.city);
// obj2.greet()


//using static 

class contractcompany1 {
    constructor() {
        companyname: "faizan"
        empid: "1234"
        city: "parphani"
        role: "software developer"
        salary: "50000"
    }



    greet() {

        console.log("welcome to the contractor company ");
    }


}
let obj2 = new contractcompany1(companyname, empid, city, role, salary);
console.log(obj2.companyname, obj2.empid, obj2.city, obj2.role);

