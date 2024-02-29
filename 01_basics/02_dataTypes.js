"use strict"; //treat all js code as new version. 
/**
 * js code used to be different 1-2 decades earlier. 
 * we refer to it as old js code
 * now new js code with better inbuilt funcitonality was released
 * by the js devs. 
 * they made sure that just because u use new code, it should not 
 * rupture old code's funcitonality. 
 * so both old and new codes had compatibility with each other. 
 * now use strict; tells the browser or V8 engine to strictly allow 
 * use of the newer version of js only
 */

// alert("akash"); this wont work since we are using node.js not browser.

let name = "akash";
let age = 21;
let nullvariable = null;

console.table([typeof name, typeof age, typeof nullvariable, typeof undefined])