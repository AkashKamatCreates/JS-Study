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