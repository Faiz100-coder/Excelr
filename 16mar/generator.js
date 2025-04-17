// generator: special type of function  it is used to stop the execution of any where in the function using "yield" key word 

// function* msg() {
//     console.log("1.hi ")
//     yield 100;
//     console.log("2. bye ")
//     yield 200;

// }
// let a = msg()
// console.log(a.next()) // 100 using next we can print the yeild value  

/*
function* add() {
    num1 = 1;
    num2 = 3;
    console.log(" the value of num1 is ", num1)
    console.log(" the value of num2 is ", num2)
    let res = num1 + num2
    console.log(res)
    // yield " first result "

    let num3 = 10
    let res1 = res + num3
    console.log(res1);
    yield " second result ";

}
let b = add();
console.log(b.next())



function* emp_detail() {
    emp_id = 101;
    emp_name = "faizan"
    dep = " developer "
    console.log(`${emp_id}  ${emp_name}  ${dep}`)
    yield " emp 1 "


    emp_id = 102;
    emp_name = "ahmed"
    dep = "web developer "
    console.log(`${emp_id}  ${emp_name}  ${dep}`)
    yield " emp 2 "
}
let c = emp_detail()
console.log(c.next())

*/


// a function within a function is called nested function 

// returing a function 
function msg1(name) {

    function msg2() {

        console.log(" the place i am working is", name)
    }
    return msg2()
}
let a = msg1("my home ")
// console.log(a());
// console.log(a);




// ------------------

function mat_fun(num1, num2) {
    function cal() {
        console.log("the sub of two numbers is : ", num1 - num2)
        console.log("the mul of two numbers is : ", num1 * num2)

    }
    // console.log(cal());
    cal();
}
let b = mat_fun(10, 5)
// console.log(mat_fun())
// mat_fun();
// console.log(b)


// question : give the list of the students 12th result only the enterted itcket should be given the result 

