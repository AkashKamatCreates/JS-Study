//Immediately invoked Function Expressions IIFE
//IIFE IS PUTTING PARENTHESIS AROUND FUNCITON FOR ITS IMMEDIATE 
//EXECUTION WITHOUT A SEPARETE CALL
(function message(){ //named iife
    console.log("DBCONNECTED")
})(); //semi colon is necessary to end an iife funciton compulsory.

//arrow funciton in iife:
(()=>{ // nameless iife
    console.log("hello from iife")
})();


((name)=>{
    console.log(`${name} hello from iife`);
})("akash kamat");



//sample comment