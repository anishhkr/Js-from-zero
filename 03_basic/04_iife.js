// 🔹 IIFE ka use global scope ke pollution se bachne ke liye hota hai
// Jaise hi function define hota hai, waise hi execute bhi ho jata hai

// ✅ Named IIFE
(function chai() {
    // Yeh function ka naam hai 'chai', lekin immediately execute ho raha hai
    console.log(`DB connected`);
})();

// ✅ Arrow function IIFE
(() => {
    console.log(`DB connected two`);
})();

// ✅ Parameterized IIFE
((name) => {
    // Argument pass kiya gaya hai ("Anish")
    console.log(`${name}, DB connected two`);
})("Anish");


// 🧠 Why Use IIFE?
// _________________________________________________________________________________
// | Reason                  | Explanation                                         |
// |-------------------------|-----------------------------------------------------|
// | Scope isolation         | Global variables ko touch kiye bina kaam karna      |
// | Immediate execution     | Function ko turant run karna bina alag se call kiye |
// | Avoid conflicts         | Multiple scripts me variable name clash se bachna   |
// | Useful in modules       | Encapsulation aur private logic ke liye perfect hai |
// ---------------------------------------------------------------------------------