// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

const invert = array => array.map(num => -num);

// invert([1, 2, 4, -5, -9]) = [-1, -2, -4, 5, 9]
// invert([1, 2, 4, 5, 9]) = [-1, -2, -4, -5, -9]
// invert([-823, -90, -67, -12, -3]) = [823, 90, 57, 5, 9]