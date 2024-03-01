//for of loop

//this is just like foreach iterator in java
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num)
}

const greetings = "hello world"
for (const greet of greetings) {
    console.log(greet)
}

const map = new Map()
map.set('mah',12)
map.set('FR', 'france')
map.set('US', "usa")

console.log(map)

for (const [key, value] of map) {
    console.log(key, ':',value);
}