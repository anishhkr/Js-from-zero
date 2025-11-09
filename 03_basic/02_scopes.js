// 🔹 SCOPES (Block vs Global)

// Global scope me variable 'a' declare kiya gaya hai
let a = 300

if (true) {
    // Yeh 'a' sirf is block ke andar valid hai (block scope)
    let a = 10
    const b = 20
    // var c = 30 // var ka scope function-level hota hai, block-level nahi

    // console.log("INNER:", a); // Output: 10
}

// console.log(a); // Output: 300 (global 'a')
// console.log(b); // ❌ Error: b is not defined outside block
// console.log(c); // ✅ Agar var use hota to accessible hota (function scope)


// 🔹 Nested Function Scope Example
function one() {
    const userName = "Anish"

    function two() {
        const website = "Youtube"
        console.log(userName) // ✅ Accessible due to closure
    }

    // console.log(website); // ❌ Error: website is not defined outside 'two'
    two()
}
// one() // Call karne par "Anish" print hoga


// 🔹 Nested IF Scope Example
if (true) {
    const userName = "Anish"
    if (userName === "Anish") {
        const website = "Youtube"
        // console.log(userName + website); // Output: AnishYoutube
    }
    // console.log(website); // ❌ Error: website is not defined
}
// console.log(userName); // ❌ Error: userName is block scoped


// 🔹 Interesting Function Behavior

// ✅ Function declaration hoisting hoti hai
console.log(addOne(5)) // Output: 6
function addOne(num) {
    return num + 1
}

// ❌ Function expression hoisting nahi hoti
// console.log(addTwo(5)) // Error: Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2
}