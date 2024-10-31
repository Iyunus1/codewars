// arrayDiff([1,2,2], [1]) == [2]
// Both inputs are an array, the paramater b will be checked if its in the first a array
// Use filter to go through each element of the array and return the original array changed
// !diff.includes(item) is a method which checks if the b array includes a number looped through the a array
// the ! filters the return array so that if the b array contains a item from the a array it will filter it out
const arrayDiff = (a, b) => a.filter((item) => !b.includes(item));

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
