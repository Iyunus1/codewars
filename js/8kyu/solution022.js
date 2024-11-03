const positiveSum = (arr) => arr.filter((element) => element >= 0).reduce((acc, c, ) => acc + c, 0)

console.log(positiveSum([1,-4,7,12]))