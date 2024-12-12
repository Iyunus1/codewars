// Write a function that takes an array, it contains one "needle" and return a message called "found the needle at position"
// The array will always be an array and will contain a "needle", not empty


const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;

// findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]) = "found the needle at position 5"

