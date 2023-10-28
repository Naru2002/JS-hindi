const accountId = 144553
let accountEmail = "adityanaru2155@gmail.com"
var accountPassword = "12345"
accountCity = "delhi"
let accountState;  // undefined

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
accountState = "uttarpradesh"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])