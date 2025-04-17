// //atm banking // private classs encapsulation 
// class Banking {
//     #balance;
//     constructor(b, name) {
//         this.#balance = b;
//         this.name = name;
//     }
//     deposit(amount) {
//         if (this.#balance > 500) {
//             console.log("the main balance is ", this.#balance);
//             this.#balance = this.#balance + amount
//             console.log("after deposit the balance is : ", this.#balance);
//         }
//         else {
//             console.log("invalid deposit amount ")

//         }
//     }
//     withdraw(amount) {
//         console.log("the maoin balance is : ", this.#balance);
//         if (amount > 300 && amount <= this.#balance) {
//             this.#balance = this.#balance - amount
//             console.log("after withdrew the balance is :", this.#balance)
//         }
//         else {
//             console.log("insuffient balance");
//         }
//     }
//     getBalace() {
//         // return this.#balance;
//         console.log("your current balance is : ", this.#balance)

//     }
// }
// const obj1 = new Banking(10000, "sanjay")
// console.log(obj1.name)
// obj1.deposit(5000)
// obj1.withdraw(400);


// using same example using function constructor 

function Banking(b) {

    let balance = b// private
    return {

        deposit: function (amount) {
            if (amount > 500) {

                console.log("main balance is : ", balance);
                balance = balance + amount

                console.log("after deposite the balance is : ", balance);

            }
            else {
                console.log("invalid deposit amount ")
            }
        },

        widthdraw: function (amount) {
            console.log("the main balance is : ", balance);
            if (amount > 300 && amount <= balance) {

                balance = balance = amount
                console.log("after withdreaw:", balance);
            }
            else {
                console.log("insuffienet balance ");
            }
        },
        getBalance: function () {
            console.log("current balance is : ", balance)

        }
    }
}
const obj1 = new Banking(10000, "sanjay")
console.log(obj1.name)
obj1.deposit(5000)
obj1.widthdraw(400);

