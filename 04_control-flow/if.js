// 🔹 Basic if-else condition
const temperature = 42

if (temperature <= 50) {
    console.log("Temperature is less than or equal to 50.")
} else {
    console.log("Temperature is greater than 50.")
}
console.log("Executed!") // Yeh hamesha chalega

// 🔹 Comparison Operators:
// <, >, <=, >=, == (loose equality), != (not equal)
// === (strict equality), !== (strict not equal)


// 🔹 Block scope example
const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User Power: ${power}`) // Output: fly
}

// console.log(`User Power: ${power}`) // ❌ Error: power is block scoped


// 🔹 One-liner if (avoid in production)
if (true) console.log("test1")
if (true) console.log("test2"), console.log("test3") // ❌ Bad practice: comma chaining


// 🔹 if-else-if ladder
const balance = 1000

if (balance < 500) {
    console.log("Less than 500")
} else if (balance < 750) {
    console.log("Less than 750")
} else if (balance < 900) {
    console.log("Less than 900")
} else {
    console.log("Less than 1200") // ✅ This will run
}


// 🔹 Logical Operators: && (AND), || (OR)
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

// ✅ AND condition: dono true hone chahiye
if (userLoggedIn && debitCard) {
    console.log("Allow to buy course")
}

// ✅ OR condition: koi ek true ho to chalega
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in")
}


// 🧠 Key Concepts for Revision
// ___________________________________________________________
// | Concept              | Explanation                      |
// |----------------------|----------------------------------|
// | `if`                 | Condition check karta hai        |
// | `else if`            | Multiple conditions ke liye      |
// | `else`               | Jab koi condition match na ho    |
// | `let` block scoped   | Sirf `{}` ke andar valid         |
// | `&&` (AND)           | Dono condition true honi chahiye |
// | `||` (OR)            | Koi bhi ek condition true ho     |
// -----------------------------------------------------------