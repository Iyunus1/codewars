const duplicateEncode = (word) =>
  word
    .toLowerCase()
    .split("")
    .map((c, i, a) => (a.indexOf(c) === a.lastIndexOf(c) ? "(" : ")"))
    .join("");

console.log(duplicateEncode("recede"));
