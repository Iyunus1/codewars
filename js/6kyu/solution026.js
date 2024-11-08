function createPhoneNumber(numbers){
    let format = '(xxx) xxx-xxxx'
    numbers.forEach((num) => format = format.replace('x', num))
    return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))