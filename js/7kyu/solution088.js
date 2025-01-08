function printerError(s){
    const errorCode = "nopqrstuvwxyz"
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(errorCode.includes(s[i])){
            count++
        }
    }
    return count+"/"+s.length
}

console.log(printerError("aaabbbbhaijjjm"))