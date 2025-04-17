// fetch (); api 
// fetch takes 2 parameters (URL, [options])

// fetch the datta from the link 
fetch("http://goweather.xyz/weather/bangalore")
    .then((value1) => {
        return value1.json()

    }).then((value2) => {
        console.log(value2);
    })