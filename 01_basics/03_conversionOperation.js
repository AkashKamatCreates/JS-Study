let score = "33abc";

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score);
console.log(typeof valueInNumber)

//NaN: Not a Number. 
/**
 * "33" => 33
 * "33abc" => NaN
 * "abc" => NaN
 * null => 0
 * undefined => object
 * true/false => 1/0
 */

let value = 3
let negvalue = -value
console.log(negvalue)

//string concatenation: 
let s1 = "akash "
let s2 = "kamat"

let fn = s1+s2;
console.log(fn);

console.log("1"+2) // 12
console.log(1+"2") // 12
console.log("1"+2+2) //122
console.log(1+2+"2") //32
//above 4 lines show that the type of first occurence of the variable is taken into consideration. 
 
console.log(+true)

let n = 100;
console.log(n++) //100
console.log(n)   //101
console.log(n++) //101
console.log(n)   //102


  