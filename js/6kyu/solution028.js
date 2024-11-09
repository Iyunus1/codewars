function findOdd(a){
    let hashMap = {};

    for(const num of a){
        hashMap[num] = hashMap[num] + 1 || 1
    }

    for (const count in hashMap){
        if(hashMap[count] % 2 !== 0){
            return Number(count)
        }
    }

}

console.log(findOdd([1,1,2]))