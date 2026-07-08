// Dates

let MyDate = new Date()
// console.log(MyDate.toString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toLocaleString());
// console.log(MyDate.toISOString());

// console.log(typeof MyDate);
// let myCreatedDate = new Date(2023, 0, 23 )

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeSamp = Date.now()

// console.log(myTimeSamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

// '${newDate.getDay()} and the time'

newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(newDate.toLocaleDateString());
