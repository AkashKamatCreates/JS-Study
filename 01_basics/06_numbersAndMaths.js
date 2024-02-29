const score = 203;
const balance = new Number(234.734)
console.log(`${score}  ${balance}`)

console.log(balance.toString().length)
console.log(balance.toFixed(1))
console.log(balance.toPrecision(3))

let bignum = 2312334523
console.log(bignum.toLocaleString())
console.log(bignum.toLocaleString('en-IN'))

console.log(Math)
console.log(Math.abs(-234))
console.log(Math.sqrt(4))
console.log(Math.max(123, 342))
console.log(Math.min(423, 123))
console.log(Math.ceil(1.1))
console.log(Math.floor(4.5))
console.log(Math.ceil(4.5))
console.log(Math.ceil(4.6))

//random always returns value from 0 to 1
console.log(Math.random())
//to get random value more than 1: 
console.log((Math.random()*10)+1) // since random value can be 0.000245
console.log(Math.random()*100)

