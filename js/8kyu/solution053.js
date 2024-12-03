// The formula in the brackets is to convert the inputs into seconds in a total sum and since a second is 1000 milliseconds
// the h and minutes get converted into seconds and added to the original second = the time in seconds after midnight
// then times 1000 turns the seconds into milliseconds thus giving the end results of milliseconds after midnight

const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);

console.log(past(1, 30, 10))

// past(1, 30, 10) 1hour 30minutes and 10 seconds
// 60minutes in an hour, 60 seconds in a minuute, 1000 millisconds in a second