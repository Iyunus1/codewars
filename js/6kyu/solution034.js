
function findOutlier(intArray){
    let evenArr = [];
    let oddArr = [];

    for(const num of intArray){
        if(num % 2 === 0){
            evenArr.push(num)
        } else {
            oddArr.push(num)
        }
    }

    if(evenArr.length > oddArr.length){
        return Number(oddArr)
    } else {
        return Number(evenArr)
    }
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))