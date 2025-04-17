// write a program to reverse the string 

/*
let str = " my name is faizan "
let reversed = str.split("").reverse().join("");
console.log(reversed);


// remove duplicates form the array 
let arr = [1, 2, 3, 4, 5, 2]
let unique = [...new Set(arr)]
console.log(unique)
// remove duplicates from the string
let str2 = " my name is faizan "
let uniqueStr = [...new Set(str2.split(""))].join("");
console.log(uniqueStr)


*/
// check for anagram 
// anagram means " silent " ==" listen"

/*

function isAnagram(str1, str2) {
    // Remove spaces and convert to lowercase
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    // Check if lengths are equal
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort and compare
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Example usage
const word1 = prompt("Enter first word:");
const word2 = prompt("Enter second word:");

if (isAnagram(word1, word2)) {
    console.log("✅ The words are anagrams.");
} else {
    console.log("❌ The words are not anagrams.");
}

*/
// check wheater the number is palinderome or not 



function isPalindromeArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        if (arr[start] !== arr[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

// Example usage
const arr = [1, 34, 3, 2, 1];

if (isPalindromeArray(arr)) {
    console.log("✅ The array is a palindrome.");
} else {
    console.log("❌ The array is not a palindrome.");
}
