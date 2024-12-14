
const findAverage = array => array.length > 0 ? array.reduce((acc, c) => acc + c, 0)  / array.length : 0

console.log(findAverage([1, 5, 6, 9, 6]))

// findAverage([10, 5]) = 7.5
// findAverage([1, 5, 6, 9, 6]) = 7.5
// findAverage([]) = 0