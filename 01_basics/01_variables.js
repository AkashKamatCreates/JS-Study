const accountId = 144553;
//const cannot be changed after initialization 
let email = "a@google.com" //scope friendly, good practice to use let
var pass = "123123" //fixed scope i.e., if same variable changed in local, global also changes which was a problem.
city = "pune"
let accountState; //variable declared now, but can be initialized later.

/**prefer not to use var
 * because of issues in block scope
 * and functional scope
 */

console.table([accountId, email, pass, city])