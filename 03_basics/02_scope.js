let a = 10;
var b = 20;
const c = 30;

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "akash kamat"
    function two(){
        const websites = "google.com"
        console.log(username)
    }
    // console.log(website);
    //parent can access child but vice versa is not true.
    two() 
}
one()

//same parent child relations applicable to nested for, nested if else loops


