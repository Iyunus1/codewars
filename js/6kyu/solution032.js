
const digitalRoot = (num) => num < 10 ? num : digitalRoot(num.toString().split("").reduce((acc, c) => acc + Number(c), 0))

console.log(digitalRoot(14))