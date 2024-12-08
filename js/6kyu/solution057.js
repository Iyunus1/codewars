// Find out if the input string is a panagram, a panagram is a word that has every letter of the alphabet once, case insensitive.
// Having the alphabet to check against is the first step, and checking if the string includes the alphabet
// the every method tests whether all elements in the array pass the test implemented by the porivded function it returns a boolean value
// the provided function is the .include function


const isPangram = (string) => 'abcdefghijklmnopqrstuvwxyz'.split("").every((char) => string.toLowerCase().includes(char))
  


console.log(isPangram("The cake is a lie"))
// isPanagram("The quick brown fox jumps over the lazy dog") = true
// isPanagram("The five boxing wizards jump quickly") = true
// isPanagram("The cake is a lie") = false