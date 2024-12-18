// For the western suburbs croquet club has two memberships, Senior and Open
// To be a senior a member must be at least 55 years old and have a handicap greater than 7
// The input will consist of a list of pairs, each pair contains information for a single potential member with the integer for a persons age and handicap
// The output will consist of a list of strings stating wwhether the member will be senior or open

// Looping through each element in the array and checking the 0 index if it's 55 or more AND the 1st index if it's over 7 and return "Senior" if true or "Open" if false

const openOrSenior = data => data.map(array => array[0] >= 55 && array[1] > 7 ? "Senior" : "Open" )


console.log(openOrSenior([[41, 0], [75, 22], [25, 10], [67, 7]]))

// openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]) = ['Open', 'Open', 'Senior', 'Open', 'Open', 'Senior']
// openOrSenior([[41, 0], [75, 22], [25, 10], [67, 7]]) = ['Open', 'Senior', 'Open', 'Open']
