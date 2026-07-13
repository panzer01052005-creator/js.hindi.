function one() {
    console.log("One");
    two()
}

function two(){
    console.log("two");
    three()
}

function three() {
    console.log("Three");
}


console.log(one())
two()
three()

