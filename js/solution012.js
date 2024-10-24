const isIsogram = (str) =>
  str
    .toLowerCase()
    .split("")
    .every(
      (character, index, array) =>
        array.indexOf(character) === array.lastIndexOf(character)
    );

console.log(isIsogram("Catapult"));
