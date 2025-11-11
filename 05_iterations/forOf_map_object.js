// 🔹 FOR-OF LOOP — Arrays aur strings ke liye best
const arr = [1, 2, 3, 4, 5, 6]
for (const num of arr) {
    console.log(num) // Array ke elements ek-ek karke print honge
}


// 🔹 FOR-OF with String — Har character ko iterate karna
const greetings = "Hello world!"
for (const greet of greetings) {
    if (greet == " ") continue // Space skip kar diya
    console.log(`Each character is: ${greet}`)
}


// 🔹 MAP — Key-value pairs ka ordered collection
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India") // Duplicate key overwrite ho jata hai

// console.log(map) // Full map print karega

for (const [key, value] of map) {
    console.log(key, ":-", value) // Key-value pair print karega
}


// 🔹 OBJECT — Regular object iterable nahi hota with for-of
const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman',
    'game3': 'Asphalt'
}

// ❌ Error: myObj is not iterable with for-of
// ✅ Use for-in or Object.entries()
for (const [key, value] of Object.entries(myObj)) {
    console.log(key, ":-", value)
}


// 🧠 Key Concepts for Revision
// _______________________________________________________________________________________
// | Concept              | Explanation                                                  |
// |----------------------|--------------------------------------------------------------|
// | `for-of`             | Array, string, Map, Set ke liye use hota hai                 |
// | `for-in`             | Object ke keys iterate karta hai                             |
// | `Map`                | Ordered key-value pairs, iterable with `for-of`              |
// | `Object.entries()`   | Object ko iterable banata hai `[key, value]` pair ke form me |
// | `continue`           | Current iteration skip karta hai                             |
// ---------------------------------------------------------------------------------------
