// Instructions : In a given string replace every letter with its position in the alphabet, if anything in the text isn't a letter ignore it and dont return it

// When replacing strings or identifying individual characters and assigning values, hashmap provide a valuable pattern while not always efficient but simple to use.
// Create the alphabet string to compare to, assignt numbers in an object to each corresponding letter in the alphabet
// Loop through the text and if the object has the same letter push that number value into an array and then join that and return it as a string result

const alphabetPosition = text => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let map = {};
    let increment = 0;
    let emptyArr = [];

    for(const letter of alphabet){
        map[letter] = increment += 1
    }

    for(const char of text.toLowerCase()){
        if(map[char]){
            emptyArr.push(map[char])
        }
    }

    return emptyArr.join(" ")
}

console.log(alphabetPosition("The day is a Tuesday in New York"))


// alphabetPosition("The sunset sets at twelve o' clock.") = 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
// alphabetPosition("The day is a Tuesday in New York") = 20 8 5 4 1 25 9 19 1 20 21 5 19 4 1 25 9 14 14 5 23 25 15 18 11