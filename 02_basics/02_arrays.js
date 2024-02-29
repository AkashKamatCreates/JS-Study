const dc = [1, 2, 3, 4]
const marvel = [5, 6, 7, 8]

// console.log(marvel.push(dc)) 
// console.log(marvel)
const combined = marvel.concat(dc)
console.log(combined)

const allheros = [...marvel, ...dc]
console.log(allheros);

