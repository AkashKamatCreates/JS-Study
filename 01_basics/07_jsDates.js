//Dates
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(typeof myDate)
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())

let newDate = new Date(2024, 0, 15)
console.log(newDate.toDateString())

// date in yyyy-mm-dd format
let date = new Date("2024-02-29")
console.log(date.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)

let sampledate = new Date()
console.log(sampledate.getMonth()+1)//month+1 because months start from 0 internally.
console.log(sampledate.getDay())
console.log(sampledate.getFullYear())

sampledate.toLocaleString('default', {
    weekday: "long"
})