// In a small town the population is 1000 it increases by 2 percent each year and 50 new inhabitants per year come to live in the town
// How many years greater or equal to p = 1200
const nbYear = (p0, percent, aug, p) => {
    let count = 0;
    let inhabitants = p0;
    percent = percent / 100 
    while(inhabitants < p){
      count++
      inhabitants = Math.floor(inhabitants + (inhabitants * percent) + aug)
    }
  return count
}

console.log(nbYear(1000, 0.02, 50, 1200))