const XO = (string) => {
  let x = [];
  let o = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === "x") {
      x.push(string[i].toLowerCase());
    } else if (string[i].toLowerCase() === "o") {
      o.push(string[i].toLowerCase());
    }
  }

  if (x.length === o.length) {
    return true;
  } else if (
    x.length > o.length ||
    x.length < o.length ||
    o.length < x.length ||
    o.length < x.length
  ) {
    return false;
  } else {
    return true;
  }
};

console.log(XO("asdp"));
