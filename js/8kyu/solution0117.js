function findMultiples(integer, limit) {
    let emptyArr = [];
    for(let i = 1; i <= limit; i++){
      if(i % integer === 0){
        emptyArr.push(i)
      }
    }
    return emptyArr
  }
  