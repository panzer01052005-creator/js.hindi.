const myNums = [ 1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval)  {
//     console.log(`acc : ${acc} and currval : ${currval}`);
    
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0 )

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 3999
    },
    {
        itemName: "R course",
        price: 4999
    },
    {
        itemName: "C++ course",
        price: 4999
    },
    {
        itemName: "Java course",
        price: 5999
    },
    {
        itemName: "SQL course",
        price: 3999
    },
    {
        itemName: "mongoDB course",
        price: 2999
    },
    {
        itemName: "Talwind course",
        price: 2999
    },
]


const priceTopay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceTopay);
