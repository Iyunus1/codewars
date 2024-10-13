console.log("Hello World");

function disemvowel(str) {
  let lettersToRemove = "aeiou";
  const result = str
    .split("")
    .filter((letter) => {
      return !lettersToRemove.includes(letter);
    })
    .join("");
  return result;
}

console.log(disemvowel("This website sucks"));
