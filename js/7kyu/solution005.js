const array = [1, 2, "a", "b"];

const filter_list = (l) => l.filter(Number.isFinite);

console.log(filter_list(array));
