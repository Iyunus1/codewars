// Implement a function that accepts 3 integer values, the function should return true if a triangle can be given with the sides given and false otherwise


const isTriangle = (a,b,c) => a + b > c && a + c > b && c + b > a

console.log(isTriangle(1, 2, 2))

// isTriangle(1,2,9) = false
// isTriangle(1,2,2) = true