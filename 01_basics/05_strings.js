const name = "akash"
const repocount = 30;

// console.log(name+repocount)
console.log(`Hello my name is ${name} and my repo count is ${repocount}`)
// use ${} for calling variables in console.log

const gameName = new String("akash game")
console.log(gameName[2])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))

console.log(gameName.indexOf('m'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const sstring = "  a kamat   "
console.log(sstring.trim())

const url = "a .cbobbm/ safsfsafa asfd /"
console.log(url.replace(" ", "-"))
console.log(url.includes("a"))