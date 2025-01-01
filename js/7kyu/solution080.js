
const oddOrEven = (array) =>  array.reduce((acc, c) => acc + c, 0) % 2 == 0 ? "even" : "odd"