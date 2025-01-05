
const narcissistic = value => value.toString().split("").map((num, index, arr) => Number(num) ** arr.length).reduce((acc, c) => acc + c, 0) === value



console.log(narcissistic1(153))