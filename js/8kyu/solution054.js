// Input string needs the initials to be capitalized with a dot between them e.g L.M
// Using a split to separate the letters, using map with a slice method to get the first characters of each element
// Then to join them with a . and then to uppercase them

const abbrevName = (name) => name.split(" ").map((name) => name.slice(0, 1)).join(".").toUpperCase()

// abbrevName = 'Jim malone'  = J.M
console.log(abbrevName('patrick feeney'))