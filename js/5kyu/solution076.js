// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// Given an array I only want the number 0 from it and placed at the end
// I decided to create two arrays one with only 0 and the other with everything else
// I then combined these arrays with the concat method as the 0 array will always merge at the end.

const moveZeros = arr => {
    let zeroArr = [];
    let restArr = [];
    for(const element of arr){
        element === 0 ? zeroArr.push(element) : restArr.push(element)
    }
    return restArr.concat(zeroArr)
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))