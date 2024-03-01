function saymyname(){
    console.log("a")
    console.log("k")
    console.log("a")
    console.log("s")
    console.log("h")
}

saymyname // only reference of the function
saymyname() //execute the function

function addnos(n1, n2){
    return n1+n2;
}
console.log(addnos(4, 6))

function loginmessage(username = "defaultname"){
    // if(username === undefined){
    //     console.log("please enter a username");
    //     return 
    // }
    if(!username){
        console.log("please enter a username");
        return 
    }
    return `${username} has logged in`
}

console.log(loginmessage())

function calculatecartprice(...n1){ //... is a rest operator, 
    //rest operator used in case where we dont know how many inputs will 
    //be there, for example, shopping cart, we dont know how many items
    //will the shopper put in cart. 
    return n1
}
console.log(calculatecartprice(34,54, 73,234))