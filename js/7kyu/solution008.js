const string = "ere";

const findShort = (s) => Math.min(...s.split(" ").map((word) => word.length));

console.log(findShort(string));
