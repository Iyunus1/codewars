
const persistence = (num) => num < 10 ? 0 : 1 + persistence(num.toString().split("").reduce((acc, c) => acc * Number(c)))



console.log(persistence(9))