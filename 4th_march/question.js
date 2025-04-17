// check wheather the characttor is vovel or consonents 
function checkVowelOrConsonent(char) {

    if (/[aeiou]/.test(char)) {
        return "Vowel";
    } else {
        return "consonents"
    }

}
console.log(checkVowelOrConsonent("a"))
console.log(checkVowelOrConsonent("b"))
// console.log(checkVowelOrConsonent("c"))
// console.log(checkVowelOrConsonent("t"))
// console.log(checkVowelOrConsonent("i"))


// check wheather the charactor is alphabet or not 

function checkAlphabet(char) {

    if (/[a-zA-Z]/.test(char)) {
        return "Alphabet"
    }
    else {
        return "Not Alphabet"
    }
}
console.log(checkAlphabet("a"))
console.log(checkAlphabet("1"))
console.log(checkAlphabet("c"))
console.log(checkAlphabet("?"))

// capitalize the first letter of each word in a sentence 
// tri extra whit space from the beigeing and eng 


// capitalize the first letter of each word using regex 

let s = "my university name is dbatu lonere , raighad"
pat = /\b\w/g;
s = s.replace(pat, match => match.toUpperCase());
console.log(s)
// remove extra white space from the beginning and end of a string
let s1 = "   my university name is dbatu lonere , raighad   "
s1 = s1.trim();
console.log(s1)
// s.replace(pat, match >=match.toUpperCase())


// using function 
function capitalizeOfEachWord(sent) {

    return sent.replace(/\b\w/g, char => char.toUpperCase())


}
let sentence = "i am form parbhani and i am studying in the aurangabad"
console.log(capitalizeOfEachWord(sentence))

// trim the space form the begeingn and last 

function trimSpace(sente) {
    return sente.trim()
}
let sentence1 = "         dynanopasak college of arts commarce and science             "
console.log(trimSpace(sentence1))