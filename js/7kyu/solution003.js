const numString = "1 2 3 4 5";

const highAndLoww = (string) => {
  const array = string.split(" ").map(Number);
  return `${Math.max(...array)} ${Math.min(...array)}`;
};

console.log(highAndLoww(numString));
