// 🔹 Object with Method Using `this`
const user = {
    userName: "Anish",
    price: 999,

    welcomeMessage: function () {
        // `this` refers to current object (user)
        console.log(`${this.userName}, welcome to website`);
        console.log(this); // pura object print karega
    }
}

// user.welcomeMessage(); // Output: Anish, welcome to website
// user.userName = "sam";
// user.welcomeMessage(); // Output: sam, welcome to website
// console.log(this); // Global scope me `this` browser me window hota hai, Node me empty object


// 🔹 Function vs Arrow Function and `this` Behavior
// ❌ Regular function me `this.username` undefined hoga kyunki `this` global object ko refer karta hai
// function chai() {
//     const username = "Anish"
//     console.log(this.username); // undefined
// }
// chai()

// ❌ Function expression me bhi same behavior
// const chai = function() {
//     const username = "Anish"
//     console.log(this.username); // undefined
// }

// ✅ Arrow function me `this` lexical hota hai (parent scope se inherit hota hai)
const chai = () => {
    const username = "Anish"
    console.log(this.username); // undefined (kyunki parent scope me `username` nahi hai)
}
// chai()


// 🔹 Arrow Function Variants
// ✅ Explicit return
// const addTwoNum = (num1, num2) => {
//     return num1 + num2
// }

// ✅ Implicit return (short syntax)
// const addTwoNum = (num1, num2) => num1 + num2

// ✅ Implicit return with parentheses
// const addTwoNum = (num1, num2) => (num1 + num2)

// ✅ Returning an object — parentheses zaroori hain
const addTwoNum = (num1, num2) => ({ username: "Anish" })
console.log(addTwoNum(3, 5)); // Output: { username: "Anish" }


// 📘 Quick Summary
// _________________________________________________________________________________
// | #Concept                 | #Explanation                                       | 
// | this in object           | Refers to current object                           | 
// | this in function         | Refers to global object (undefined in strict mode) | 
// | this in arrow fn         | Lexical scope se inherit hota hai                  | 
// | Arrow function           | Short syntax, no own this, great for callbacks     | 
// | Object return in arrow   | Checks if x is an array                            | 
// ---------------------------------------------------------------------------------