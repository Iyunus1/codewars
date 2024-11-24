// Given a string and when transforming that string, convert to array to change each element on a condition
// Use map to return a value and use Number() method so comparison is done between numbers not strings
// Return 0 if it's a digit below 5 and 1 if it's above 5, both of these returns should be a string
// Once the array is replaced with strings of 0 and 1 then join these together so a proper string can be returned

const fakeBin = x =>  x.split("").map((num) => Number(num) < 5 ? '0' : '1').join("")



// fakeBin('168291') = '011010'

// Input is a string of digits and will never be an empty string
// The return should be a string aswell
console.log(fakeBin('168291'))
console.log(fakeBin('01001001'))
console.log(fakeBin('18773012380'))