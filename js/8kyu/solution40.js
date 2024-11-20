// 8 Kyu Summ Arrays
// The output will result in a single number and 0 if no number
// The input can be negative, decimal or positive but will only be a number
// I use reduce method because it's an array to reduce to a single value, the initial value i will add as 0 by default, if the array is empty and there's nothing to reduce
// 0 will be returned as the initial value and therefore default from an input of an empty array.

const sum = numbers => numbers.reduce((acc, c) => acc + c, 0)

