
const countSheep = (num) => {
    let string = "";
    for(let i = 1; i <= num; i++){
        string += `${i} sheep...`
    }
    return string
}

console.log(countSheep(3))