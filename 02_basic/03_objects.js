// ✅ Singleton Object (Ek hi instance banega)
// JavaScript mein Singleton ka matlab hota hai ek hi object instance ka hona

// ✅ Object Literals (Sabse common tarika object banane ka)
const mySym = Symbol("Key1"); // Symbol as a unique key

const jsUser = {
    // 🔹 Normal key-value pair
    name: "Anish",

    // 🔹 Multi-word key (quotes zaroori hain)
    "full name": "Anish Kumar",

    // 🔹 Symbol as a key (square brackets mein likhna padta hai)
    [mySym]: "key2",

    // 🔹 Primitive properties
    age: 21,
    location: "Bihar",
    email: "anish@google.com",
    isLoggedIn: false,

    // 🔹 Array as a property
    lastLoginDays: ["monday", "saturday"]
};



// ✅ Object Access Methods (Object ke andar ke data ko access karne ke 3 tarike)

// console.log(jsUser.email);        // 1. Dot notation
// console.log(jsUser["email"]);     // 2. Bracket notation (string key ke liye zaroori)
// console.log(jsUser["full name"]); // 3. Bracket notation for multi-word keys
// console.log(jsUser[mySym]);       // 4. Accessing Symbol key



// ✅ Object.freeze() (Object ko lock kar deta hai - koi change nahi hoga)

// jsUser.email = "anish@chatgpt.com";
// Object.freeze(jsUser); // Ab object immutable ho gaya
// jsUser.email = "anish@microsoft.com"; // ❌ Change nahi hoga
// console.log(jsUser); // Email wahi purana dikhayega



// ✅ Adding Methods to Object (Function as a property)
// Method 1: Simple greeting
jsUser.greeting = function(){
    console.log("Hello JS user");
}
// Method 2: Greeting with dynamic name using 'this'
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


// ✅ Function Execution vs Reference
console.log(jsUser.greeting);      // Function ka reference (output: [Function])
console.log(jsUser.greeting());    // Function ka execution (output: Hello JS user)
console.log(jsUser.greetingTwo()); // Function with dynamic data (output: Hello JS user, Anish)


// 🧠 Quick Recap (Syntax Summary)
// ___________________________________________________________________________
// | Concept         | Syntax Example             | Notes                    | 
// | Object Literal  | const obj = { key: value } | Basic object             | 
// | Symbol as key   | [Symbol("id")]: "value"    | Unique key               | 
// | Access property | obj.key or obj["key"]      | Dot vs Bracket           | 
// | Freeze object   | Object.freeze(obj)         | Makes object immutable   | 
// | Add method      | obj.fn = function() {}     | Function as property     | 
// | Use (this)      | this.key                   | Refers to current object | 
// ---------------------------------------------------------------------------