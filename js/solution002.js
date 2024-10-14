const num = 765;

const squareDigits = (num) =>
  Number(
    num
      .toString()
      .split("")
      .map((num) => num ** 2)
      .join("")
  );

console.log(squareDigits(num));
