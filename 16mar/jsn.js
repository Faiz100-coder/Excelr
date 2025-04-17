// json 
// conversion of object to jjson and json to object 
// json : javascript object notation

// let b = {
//     name: "excelr",
//     address: "bandlore"

// }
// console.log(b)
// console.log(b.name)


// convert json to object 
let a = `{
    "name": "excelr",
    "address": "bandlore"

}`
const obj = JSON.parse(a)
console.log(obj)




let a = {
    name: "excelr",
    address: "bandlore"

}
const obj1 = JSON.stringify(a)
console.log(obj1)