function maskify(cc){
    let string = '';
    let lastFour = cc.slice(-4)
for(let i = 0; i < cc.length - 4; i++){
    string += '#'
}
return string + lastFour

}

console.log(maskify("64607935616"))