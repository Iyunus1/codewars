
const number = busStops => {
    let onBus = 0;
    let offBus = 0;
    busStops.forEach((array)=> {
        onBus += array[0]
        offBus += array[1]
    })
    return onBus - offBus
}

console.log(number([[10,0],[3,5],[5,8]]))


// example solution by destructuring the array const number = busStops => busStops.reduce((total, [in, out]) => total + in - out, 0)
// By destructuring the each array element e.g [10, 5] to 10 - 5 