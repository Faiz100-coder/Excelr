// what will be the output of the question 
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() => console.log("C"));
// console.log("D");























function counter() {

    let c = 1;
    return function () {
        return c++;
    }
}

let a = counter()
console.log(a())
console.log(a())
console.log(a())
console.log(a())
console.log(a())
console.log(a())
console.log(a())
console.log(a())