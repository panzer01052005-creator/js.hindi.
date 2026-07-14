const accountId = 144553
let accountEmail = "abhishek@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2

accountEmail = "hc@hd.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
let accountState;

console.log(accountId);

// Prefer not to use var

// because of issue in block scope and functtional scope.

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])