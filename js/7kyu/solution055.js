// Binary is calculated by dividng the number by 2 continously untill it reaches 0, the remainder each time is added to the string
// As we divide down and add the remainders into a binary string since binary is right to left we then reverse so the remainders
// would go from the bottom up order.


function addBinary (a, b){
    let binary = '';
    let total = a + b;
    while( total > 0){
        binary = total % 2 + binary
        total = Math.floor(total / 2)
    }
    return binary
}

console.log(addBinary(1, 1))

// addBinary(1, 2) = 1 + 2 = 3 % 2 = 1 remainder so it becomes binary, then 1 % 2 = 0 and a remainder of 0 so the loop stops and the binary is 11