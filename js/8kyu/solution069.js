
const betterThanAverage = (classPoints, yourPoints) => classPoints.reduce((acc, c) => acc + c, 0) / classPoints.length < yourPoints 