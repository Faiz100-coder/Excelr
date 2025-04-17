module.exports.verify = () => {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("card is varified "); resolve();
            // resolve("successful...");
        }, 3000)

    })
    return p;
}
