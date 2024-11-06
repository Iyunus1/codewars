// List all natural numbers below 10 that are multiples of 3 and 5, we get 3, 5, 6 and 9. the sum of these is 23
// finish the solution so it returns the sum of all multilples below the number passed in, if the number is negative return 0
// Check if the passed in number is below 0 and return 0
// create a sum to add the numbers into, check each multiple and addd into sum and return that sum after the loop

function solution(number){
    let sum = 0;
    if(number < 0){
        return 0;
    } else {
        for(let i = 1; i < number; i++){
            if(i % 3 === 0 && i % 5 === 0 ){
                sum += i
            } else if (i % 3 === 0){
                sum += i
            } else if (i % 5 === 0){
                sum += i
            } 
        }
    }
    return sum
}

console.log(solution(10))