// Set is an object which the method sort() cant be used on as it's a method for arrays, new Set() will reduce every repeated character to a single value
// in the set object much like a hashmap, unlike other objects that are not iterable e.g a:1, b:2, you can use the spread operator in brackets [...new Set(s1+s2)]
//it created a new array with the single characters from new Set and turned them into an array with the spread ... operater in bracket.
// then to just sort() and join() to return a alphabetically string

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("")

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))


// longest longest(a, b) -> "abcdefklmopqwxy"