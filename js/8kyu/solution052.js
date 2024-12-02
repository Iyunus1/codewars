// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Checking the condition to return 0 if n OR m are a minus number in which case return 0.
// If they're above 0 the output of n = 5 and m = 5 is 25 therefore it's logical to assume n * m to = 25

const paperwork = (n, m) => n < 0 || m < 0 ? 0 : n * m

// console.log(paperwork(5, 5)) = 25 Blank Pages needed
// console.log(paperwork(-2, 5)) = There's a minus number therefore the result is 0