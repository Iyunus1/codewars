// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings.

const areYouPlayingBanjo = name => name[0].toLowerCase() === r ? name + ' plays banjo' : name + ' does not play banjo'

// areYouPlayingBanjo('Riven') =  'plays banjo'
// areYouPlayingBanjo('ruck') =  'plays banjo'
// areYouPlayingBanjo('adam') =  'does not play banjo'
