// Turn input into binary and then return the sum of the numbers e.g 1234 = binary(01001011001) = 5
// Calculate binary by dividing by 2 and returning the remainder each time into binary
// Use a while loop to continually divide the numer getting its remainder and dividing the number untill it reaches 0 and stops being able to be divided


const countBits = (n) => {
    const emptyArr = [];
    let total = n;
    while(total > 0){
        emptyArr.push(total % 2);
        total = Math.floor(total / 2);
    }
    return emptyArr.reverse().reduce((acc, c) => acc + c, 0)
}

console.log(countBits(1234))