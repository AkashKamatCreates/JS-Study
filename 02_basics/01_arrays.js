const nu = [10,23,43,62]
console.log(nu)
const a = new Array(123, 234, 34,56 ,5653,456 ,34,6 ,34, 56,34345)
console.log(a)

let q = new Array(1, 2, 3, 4, 5)
console.log(q.push(6)) //pushes 6 to the last of array
console.log(q.pop()) // pops the last element of array
console.log(q.unshift(9)) //adds 9 at the starting of array
q.shift(23) //deletes element from the start


console.log(q.includes(2))
console.log(q.indexOf(3))

const newarr = q.join()
console.log(q)
console.log(newarr)

//slice, splice
let sample = new Array(1, 2, 3, 4, 5, 6, 7, 8)

//slice: 
console.log("A: "+ sample)
console.log(sample.slice(3, 6))
console.log("B: "+ sample)
console.log(sample.splice(3, 6))
console.log("C: "+ sample)




