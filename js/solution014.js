const accum = (string) =>
  string
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");

console.log(accum("Hello"));
