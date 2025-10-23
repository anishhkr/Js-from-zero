const marvelHeros = ["ironman", "thor", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]
// marvelHeros.push(dcHeros); //// Adds dcHeros as a single array inside marvelHeros (nested array)

// console.log(marvelHeros); // ['ironman', 'thor', 'spiderman', ['superman', 'flash', 'batman']]
// console.log(marvelHeros[3]); //Show the DC heros array
// console.log(marvelHeros[3][1]); // Accesses 'flash' from dcHeros

const allHeros = marvelHeros.concat(dcHeros) //It create a new array, Combines both arrays into a new one (flat)
console.log(allHeros); //[ 'ironman', 'thor', 'spiderman', 'superman', 'flash', 'batman' ]

const newAllHeros = [...marvelHeros, ...dcHeros] // Uses spread (...) to merge arrays (flat)
console.log(newAllHeros); //[ 'ironman', 'thor', 'spiderman', 'superman', 'flash', 'batman' ]

const anotherArray = [1,4,6,[4,7,3],9,4,[2,5,[3,0]]]
const realAnotherArray = anotherArray.flat(Infinity) // Removes all nested levels → makes one flat array
console.log(realAnotherArray); // [1, 4, 6, 4, 7, 3, 9, 4, 2, 5, 3, 0]

console.log(Array.isArray("Anish")); // Checks if it's an array → false
console.log(Array.from("Anish")); // Converts string to array of characters → ['A', 'n', 'i', 's', 'h']
console.log(Array.from({name: "Anish"})); //// Gives empty array because object is not iterable

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Creates array → [100, 200, 300]
//Array.of() creates a new array from the values you give it — no matter how many or what type.



// 📘 Quick Summary
// ___________________________________________________________
// | #Method            | #What it does                      | 
// | push()             | Adds item at the end               | 
// | concat()           | Combines arrays (new one)          | 
// | ...spread          | Merges arrays (flat)               | 
// | flat(Infinity)     | Removes all nested arrays          | 
// | Array.isArray(x)   | Checks if x is an array            | 
// | Array.from("text") | Converts string to character array | 
// | Array.of(a, b, c)  | Makes array from values            | 
// -----------------------------------------------------------