// singleton 
// Object.create

// object literal

const mysymbol = Symbol("key1")

const myobj = {
    name: "akash",
    age: 21,
    [mysymbol]: "mykey1", //[] to be used when referencing symbols
    "full name": "akash kamat",//object name with space in between
    city: "pune",
    email: "akash@mail.com",
    loginstatus: false
}

console.log(myobj.name)
console.log(myobj["name"])
console.log(myobj["full name"]) //only way to access object with spaces in between
console.log(myobj[mysymbol])


console.log("------------------")
console.log(myobj.email)
myobj.email = "akash@google.com"
console.log(myobj.email)

// Object.freeze(myobj)

// myobj.email = "akash@apple.com"
console.log(myobj.email) //still gives akash@google.com since object is frozen 
// and changes cannot be made to the object values

console.log(myobj)

myobj.greeting = function(){
    console.log(`hello, ${myobj.name}`)
}

myobj.greetingtwo = function(){
    //this keyword used for referencing current object values.
    console.log(`hello, this is second greeting for ${this.name}`) 
}

console.log(myobj.greetingtwo())



