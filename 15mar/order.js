let ask = require("./carddetails.js")
async function carddetails() {
    const card = "1243 4566 7896 2435"
    console.log("card details are given ")
    let p1 = await ask.verify();
    // console.log(p1);
    debut();


    // let p1 =  ask.verify();
    // console.log(p1);

    // p1.then(() => {
    //     debut();

    // }, () => {
    //     console.log("sry we are not able to debit")
    // })
}


function debut() {
    console.log("debited ")
}
carddetails();



// front design 
// lets have a given atm pin account is in sbi 
// but it widraw the money in kotek 

function atmpin() {




}

