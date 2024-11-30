
const sumTwoSmallestNumbers = numbers => numbers.sort((a,b) => a-b).slice(0, 2).reduce((acc, c) => acc + c)

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))