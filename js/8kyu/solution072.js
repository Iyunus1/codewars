
const countPositivesSumNegatives = input => {
    if(input === null || input.length === 0){
        return [];
    }

    let positive = 0;
    let negative = 0;

    for(i = 0; i < input.length; i++){
        if(input[i] > 0){
            positive++
        } else {
            negative += input[i]
        }
    }
    return [positive, negative]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))