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
// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Abhishek"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,455,34,34));


const user = {
    username : "Abhishek",
    price : 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 499
})

const MynewArray = [200, 400, 500, 600]

function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(MynewArray));
console.log(returnSecondvalue([200,400,400,600,655]));

function Abhishekk(name) {
    console.log(`my name is ${name}`);
    
}

Abhishekk(abhishek)