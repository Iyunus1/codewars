
function points(games) {
    let totalScore = 0;
    games.forEach((score) => {
        if(Number(score.charAt(0)) > Number(score.charAt(2))){
            totalScore += 3
        } else if (Number(score.charAt(0)) === Number(score.charAt(2))){
            totalScore += 1
        }
    })
    return totalScore 
}



  console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]))