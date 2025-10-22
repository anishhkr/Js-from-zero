// // const score = 400; // Primitive number value assign kiya gaya hai

// const balance = new Number(500); // Number object banaya gaya hai using constructor

// console.log(score); // Output: 400 (primitive number print hoga)
// console.log(balance); // Output: [Number: 500] (object form mein dikhega)

// // Number ko string mein convert karke uski length batata hai → '500' ki length = 3
// console.log(balance.toString().length); // Output: 3

// // Number ko fixed decimal places tak format karta hai → 2 decimal tak
// console.log(balance.toFixed(2)); // Output: '500.00'

// const newNum = 123.456; // Ek decimal number assign kiya gaya hai

// // Number ko total 5 digits ke precision mein convert karta hai → round bhi karega
// console.log(newNum.toPrecision(5)); // Output: '123.46'

// const hundred = 1000000; // Ek large number assign kiya gaya hai

// // Number ko Indian format mein comma ke saath represent karta hai → lakh style
// console.log(hundred.toLocaleString('en-IN')); // Output: '10,00,000'

// +++++++++++++++++ MATHS ++++++++++++++++++

// console.log(Math); 
// // Math ek built-in object hai jisme mathematical functions aur constants hote hain

// console.log(Math.abs(-4)); 
// // Negative number ka absolute (positive) value return karega → 4

// console.log(Math.round(4.7)); 
// // Nearest integer par round karega → 5

// console.log(Math.ceil(4.1)); 
// // Hamesha upar ke integer par round karega → 5

// console.log(Math.floor(4.9)); 
// // Hamesha neeche ke integer par round karega → 4

// console.log(Math.PI); 
// // PI ka constant value return karega → 3.141592653589793

// console.log(Math.min(3,5,2,7,9,3)); 
// // Sabse chhoti value return karega → 2

// console.log(Math.max(3,5,2,7,9,3)); 
// // Sabse badi value return karega → 9

console.log(Math.random()); 
// 0 se 1 ke beech ka random decimal number generate karega (e.g. 0.3456)

console.log((Math.random() * 10) + 1); 
// 1 se 11 ke beech ka random decimal number generate karega (exclusive of 11)

console.log(Math.floor(Math.random() * 10) + 1); 
// 1 se 10 ke beech ka random integer generate karega (inclusive of 10)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
// min aur max ke beech ka random integer generate karega → 10 se 20 tak (inclusive)
