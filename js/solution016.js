// https://www.codewars.com/kata/55f2b110f61eb01779000053
// Use gauss thereom as the input can be converted into a contigous array

const getSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

console.log(getSum(4, 7));
