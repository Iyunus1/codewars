// Input of an string, always a string, not a number
// No duplicates of the same element, uppercase and lowercase are different
// Create an empty array whwich will be the result returned and a empty variable to store current values.
// Iterate through each element in an array and compare it to the empty string
// Much like an array comparing the numbers next to it, this array will replace the current iteration string with the element
// If the current element iterable is not the same as the next iteration it wont add it to the array
// creating an array of unique elements

function uniqueInOrder(iterable){
  let result = [];
  let last;

  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] !== last){
        result.push(last = iterable[i])
    }
  }

  console.log(result)
}

console.log(uniqueInOrder('ABBCcAD'))

// Expected input and output uniqueInOrder('ABBCcAD') = [A,B,C,c,A,D]