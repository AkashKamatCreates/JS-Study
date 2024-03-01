const user = {
    name: "akash kamat",
    price: 999,
    
    welcomemessage: function(){
        console.log(`${this.name}, welcome to website`)
        console.log(this)
    }
    
//this keyword is used for current context values. 
}

user.welcomemessage()
user.name = "kamat"
user.welcomemessage()

console.log(this)//returns {} because currently u r in a node environment
// in the node environment, the default context is empty. 

function sample(){
    let name = "akash kamat"
    console.log(this.name) //here undefined will be returned since 
    //in functions, this context wont work 
    //but if there is no let in front of name, this works as intended
}
sample()

/**-----------------ARROW FUNCTIONS------------------ */


const arrow =  ()=> {
    let name = "akash kamat"
    console.log(this.name)
}
arrow()
//in arrow functions, if used{}, dev has to write return or console.log 
//but in case of (), return is not required. 
//implicit return:
const addtwonums = (n1, n2) => n1+n2
const sub = (n1, n2) => (n1-n2)

//explicit means when u use return keyword, implicit means when 
//you dont use return keyword to get some value. 

console.log(sub(3, 1))
console.log(addtwonums(123, 123))


//returning an object from an arrow function:
const returnobject = (n1) => ({name: 'akash kamat', age: 21})
console.log(returnobject(12))
console.log(returnobject(12).name)