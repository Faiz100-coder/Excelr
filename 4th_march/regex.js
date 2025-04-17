// console.log("hi")

// // regular expression 
// let s = "the order number is 234 "
// let pat = /\d[0-9]/
// let r1 = s.search(pat)
// console.log(r1)

// let s1 = "this is my mail id a@gmail.com"
// let s2 = "ex123cler"


// let s3 = s1.search(s2)
// console.log(s3)


// test 
// syntax: pat.test("string")

// let s = " hellow world"
// let paat = /^[A-Za-z]+$/
// console.log(paat.test(s));


// let pat =/^[0-9]$/
// let num = "123-456-7890"
// let pat = /^(\d{3})-(\d{3})-(\d{4})/
// console.log(pat.test(num));

// wap to check valid email address  or not 


// let email = " faizan```ahmed233@gmail.com"
// // pat = /^(\s"abcdefghijklmnopqrstuvwxyz"\d{1234567890}) @ (\s "gmail"). (\s "com")/
// let emailpat = /^ [a-zA-Z0-9.%+-]+[a-zA-Z0-9.-]+\.[a-zA-Z]{2,.}$/
// console.log(emailpat.test(email));

// if (emailpat) {
//     console.log("this is the valid email addrress")

// } else
//     console.log("invalid email ");



console.log("hi ");

// wap to extracting email form the string 
let s = "my email address is a@gmail.com"
const pat = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;

let r = pat.exec(s)
console.log(r[0]);


// wap to exractign datae in yyyy-mm-dd manner 

let s1 = "my date of birth is 1999-12-12"
// let pat1 = /(\d{4})-(\d{2})-(\d{2})/
let dateRegex = /\b\d{4}-\d{2}-\d{2}\b/g;

let r1 = dateRegex.exec(s1)//it will also works with match instead of exec 
console.log(r1[0]);

// what will be the output of the this 
let p = "the price is 250dollers"
// let patern = r / "/d" /
// let p1 = patern.exec(p)
// console.log(p1[0]);


// extract all the words form the given sentense 

let s2 = "hello, this is a test sentence!";
let pattern2 = /\b\w+\b/g;
let r2 = s2.match(pattern2);
console.log(r2);

let sentence = " this is my first day of the college. and i am the final year student "
let words = /\b\w+\b/g;
let result = sentence.match(words);
console.log(result);



// program to find the consecstive digits

let text = "l have 12 apples, 3 bananas,456 organes"
let patern1 = /\d+/g;
let result0 = text.match(patern1)
console.log(result0);

