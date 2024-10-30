const duplicateCount = (text) => {
  strLower = text.toLowerCase();
  let charMap = {},
    count = 0;

  // This goes through ths string in a for loop and if the letter does not have a number give it 1 if it does + 1
  // for a single character it will have the key of 1 if it occurs more it will have the number accordingly
  for (const char of strLower) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (const char in charMap) {
    if (charMap[char] > 1) {
      count++;
    }
  }

  return count;
};

console.log(duplicateCount("ABBA"));
