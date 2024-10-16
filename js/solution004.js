const numArr = 123456789;

const descendingOrder = (n) =>
  Number(
    n
      .toString()
      .split("")
      .sort(function (a, b) {
        return b - a;
      })
      .join("")
  );

console.log(descendingOrder(numArr));
