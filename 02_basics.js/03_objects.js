// singleton

// object literals

// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name : "Abhishek",
    "full name" : "Abhishek kumar",
    [mySym]: "mykey1",
    age :21,
    location :"rampur",
    email: "abhishekkumar@gmail.com",
    isLoggedIn : false,
    lastLoginDays : [ "Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "abhishek@gmail.com"
// Object.freeze(JsUser)

JsUser.email = "Abhisheksaini"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello abhishek kumar");
}
    
// console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello Abhishek kumar, ${this.name}`);
}

console.log(JsUser.greeting2());
