const capitalize = (string) =>
  string
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

console.log(capitalize("How can mirrors be real if our eyes aren't real"));
