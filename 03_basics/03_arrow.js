const user ={
    username: "Abhishek",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "AK"
// user.welcomeMessage()

// console.log(this);

// 


// const chai = function () {
//     let username = "Abhishek"
//     console.log(this.username);
    
// }


// chai()



const chai =  () => {
    let username = "Abhishek"
    console.log(this);
    
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(34,45));



// const addTwo = (num1, num2) => num1 + num2


// const addTwo = (num1, num2) => (num1 + num2)


const addTwo = (num1, num2) => ({username: "Abhishek"})


console.log(addTwo(34,45));


const myArray = [2, 5, 34, 6,]

// myArray.forEach()