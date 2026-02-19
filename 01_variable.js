const accountId=144553;
let accountEmail="ajay@gmail.com"
var accountPassword="12345";  //not good pratice to use var dont use var
accountCity="Pune";  //not good pratice to declare varible

//accountId=2;
accountPassword="23453422";
accountCity="Bangaluru"; //not good pratice to declare varible

let accountState;
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

/*
Prefer not to use var
because of issue is block scope and functional scope


*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


