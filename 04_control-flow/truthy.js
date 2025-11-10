// 🔹 Truthy/Falsy Check with Email
const userEmail = "a@nish.kr"

if (userEmail) {
    console.log("✅ Got user email")
} else {
    console.log("❌ Don't have user email")
}


// 🔹 Falsy Values in JavaScript:
// false, 0, -0, BigInt(0n), "", null, undefined, NaN


// 🔹 Truthy Values:
// "0", "false", " ", [], {}, function(){}


// 🔹 Check for empty array
const emptyArray = []
if (emptyArray.length === 0) {
    console.log("Array is empty")
}


// 🔹 Check for empty object
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}


// 🔹 Loose Equality Comparisons
console.log(false == 0)     // true
console.log(false == '')    // true
console.log(0 == '')        // true


// 🔹 Nullish Coalescing Operator (??)
// Sirf `null` ya `undefined` hone par fallback value leta hai
let val1
val1 = null ?? 10 ?? 20     // Output: 10
console.log(val1)

// Examples:
// val1 = 5 ?? 10          // Output: 5
// val1 = null ?? 10       // Output: 10
// val1 = undefined ?? 15  // Output: 15


// 🔹 Ternary Operator — Short if-else
const stockPrice = 70
stockPrice >= 50
    ? console.log("High price!")   // ✅ true condition
    : console.log("Low price!")    // ❌ false condition


// 🧠 Key Concepts for Revision
// ________________________________________________________________________________________
// | Concept                     | Explanation                                            |
// |-----------------------------|--------------------------------------------------------|
// | Truthy/Falsy                | JS me kuch values default true/false treat hoti hain   |
// | Empty Array/Object Check    | `.length === 0` ya `Object.keys().length === 0`        |
// | Loose Equality (`==`)       | Type conversion karta hai, confusing ho sakta hai      |
// | Nullish Coalescing (`??`)   | Sirf `null` ya `undefined` par fallback value deta hai |
// | Ternary Operator            | Short form of if-else: `condition ? true : false`      |
// ----------------------------------------------------------------------------------------