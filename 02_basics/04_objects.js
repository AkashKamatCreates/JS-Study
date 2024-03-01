/**
 * singleton: A singleton is a design pattern that ensures a class has 
 * only one instance and provides a global point of access to that 
 * instance.
 */

/**
 * Object literal: 
 * An object literal is a way of creating objects in JavaScript by 
 * directly specifying their properties and methods within curly braces 
 * {}
 */

// const singletonobject = new Object()
const nonsingletonobject = {}

nonsingletonobject.id = "123abc"
nonsingletonobject.name = "samm"
nonsingletonobject.loggedin = false

// console.log(singletonobject)
console.log(nonsingletonobject)

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "akash",
            lastname: "kamat",
            fullnameformatted: function(){ 
                return this.firstname +" "+ this.lastname;
            }
        },
        
    }
}

console.log(regularuser.fullname?.userfullname.fullnameformatted())

//combining multiple objects: 
const o1 = {a:1, b:2}
const o2 = {c:3, d:4}

const o3 = Object.assign({}, o1, o2) //here, {} acts as target in which o1 and o2 will be filled. 
const o4 = {...o1, ...o2} //joining using spread operator
console.log(o3)
console.log(o4)



//most used syntax: values from database:::
const users = [
    {
        name: "ak",
        email: "ak@email.com"
    },
    {
        name: "ak",
        email: "ak@email.com"
    },
    {
        name: "ak",
        email: "ak@email.com"
    },
    {
        name: "ak",
        email: "ak@email.com"
    },
    {
        name: "ak",
        email: "ak@email.com"
    }
]
//accessing first value: 
console.log(users[1].email)

console.log(nonsingletonobject)
console.log(Object.keys(nonsingletonobject))
console.log(Object.values(nonsingletonobject))

/**
 * below is shorter way of getting object values
 */
const course = {
    coursename: "js",
    duration: 15, 
    price: 0
}
//old method:
console.log(course.coursename)

//new method: also called as destructuring objects.
const {coursename} = course; //define once
console.log(coursename) //use again without using .dot operator repeatedly
//since coursename is still very long name, we can make it short. 
const {coursename: name} = course;
console.log(name)



