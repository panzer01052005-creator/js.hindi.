function sayMyName(){
    console.log("A");
    console.log("b");
    console.log("h");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("e");
    console.log("k");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(34, 435)
// addTwoNumbers(34, "435")
// addTwoNumbers(34, "a")
// addTwoNumbers(34, null)

// const result = addTwoNumbers(34, 435)
// console.log("Result: ", result);

function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result
return number1 + number2
 }

const result = addTwoNumbers(34, 435)
console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Abhishek"))
console.log(loginUserMessage())