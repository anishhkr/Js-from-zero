const name = "Anish"
const repoCount = 89

//console.log(name + repoCount + " values");  //Old method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);
//=> Template literal ke through string interpolation ho raha hai.
//=> ${name} aur ${repoCount} ke values string ke andar embed kiye gaye hain.

const gameName = new String('Anishhkr')
//=> Ek new String object banaya gaya hai, primitive string nahi.
//=> Iska type object hoga, aur isme string methods available hote hain.

// console.log(gameName[0]); // String ke first character ko access kiya gaya hai.

// console.log(gameName.__proto__);
//=> String object ka prototype print kiya gaya hai.
//=> Isme saare built-in string methods hote hain jaise toUpperCase, slice, etc.

// console.log(gameName.length)    // String ki total length print ki gayi hai.

// console.log(gameName.toUpperCase());    // String ko uppercase mein convert kiya gaya hai.

// console.log(gameName.charAt(2)); // Index 2 par jo character hai, usse return karega → 'i'

// console.log(gameName.indexOf("h")); // String 'Anishhkr' mein pehla 'h' kis index par hai, uska position return karega → Output: 4

// const newString = gameName.substring(0, 5); //Divided the string into substring. It is not consider negative(-) values.
// console.log(newString);

// const anotherString = gameName.slice(-7, 4); //Divided the string into substring. It consider negative values.
// console.log(anotherString);

// const newStringOne = "     Anish     kr";
// console.log(newStringOne);
// console.log(newStringOne.trim()); //It removes extra spaces at the beginning and end.

const url = "https://anish.com/Ansih%20kumar"
console.log(url.replace('%20','-')); // URL string mein '%20' ko '-' se replace karega

console.log(url.includes('anish')); // Check karega ki 'anish' substring url mein hai ya nahi

const text = "How are you doing today."
const wordsArray = text.split(" "); //Split the sentance into words on the basis of space and store in the form of array.
console.log(wordsArray);

const fruits = "Apple,Banana,Graps,Guava";
const fruitsArray = fruits.split(",");
console.log(fruitsArray); //[ 'Apple', 'Banana', 'Graps', 'Guava' ]

let limitedArray = text.split(" ", 3);// split() ka second parameter use karke hum kitne parts chahiye, wo limit kar sakte hai.
console.log(limitedArray); // ["How", "are", "you"]

let sentence = "Hello 1 world. Sentence number 2.";
let regexArray = sentence.split(/\d/);// sentence ko har digit (0–9) ke jagah se split karega 
console.log(regexArray); // ["Hello ", " world. Sentence number ", "."]