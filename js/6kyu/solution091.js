function isValidWalk(walk){
    let ns = 0;
    let ew = 0;
    walk.forEach((direction) =>{
        if(direction === 'n'){
            ns++
        } else if (direction === 's'){
            ns--
        } else if (direction === 'e'){
            ew++
        } else if (direction === 'w'){
            ew--
        }
    } )
    return walk.length === 10 && ns === 0 && ew === 0;
}