const accountId = 58642
let accountEmail = "anish@ies.com"
var accountPassword = "anish12345"
accountCity = "Bihar"

// accountId = 89 // NOt Allowed
accountEmail = "anish@kr.com"
accountPassword = "4556265"
accountCity = "UP"
let accountState;


/*
Prefer not to use var:
Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
