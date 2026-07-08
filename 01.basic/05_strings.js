const name = "Abhishek"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("abhishek-kmr")

// console.log(gameName[0]);
// console.log(gameName.__proto__);



// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, -4)
console.log(anotherString);

const newString1 = "    Abhishek    "
console.log(newString1);

console.log(newString1.trim());

const url = "https://abhishek-kmr.com/"

console.log(url.replace('kmr', 'kumar'));

url.includes('abhishek') ? console.log("Yes") : console.log("No");

const gameName1 = new String("abhishek-kmr-ab-ak")

console.log(gameName1.split('-'));
