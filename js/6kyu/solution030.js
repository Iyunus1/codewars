
const spinWords = (string) => string.split(" ").map((word) => word.length >= 5 ? word.split("").reverse().join("") : word).join(" ")


console.log(spinWords('This is another test'))