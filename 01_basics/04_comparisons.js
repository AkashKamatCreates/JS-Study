//comparing two different data types. 
console.log("2">1)
console.log("02">1) 

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true
/**the above is true because == operator 
 * and the comparisons operators >< work differently.
 * comparisons operator convert the 
 * null to a number, with value as 0
 */

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

//triple equal checks: checks datatype as well
console.log("1"==1) //true since conversions
console.log("1"===1) // false since absolute comparisons through datatypes as well 

