// 🔹 Tinder User Object Creation
// Ek empty object banaya gaya hai jisme user ki details store karenge
const tinderUser = {}

tinderUser.id = "abfs25e47"               // User ka unique ID
tinderUser.name = "sammy"                 // User ka naam
tinderUser.isLogedIn = false              // User login hai ya nahi

// console.log(tinderUser);               // Object ko print karne ke liye


// 🔹 Nested Object Example (regularUser)
// Ek object jisme nested structure hai (email + full name)
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Anish",           // Pehla naam
            lastName: "Kumar"             // Last naam
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName); // "Anish" print karega


// 🔹 Object Merging Technique
const obj1 = {1: "a", 2: "b"}
const obj2 = {4: "a", 5: "b"}
const obj4 = {6: "a", 7: "b"}

// ❌ Wrong way: const obj3 = {obj1, obj2} // Yeh nested object banata hai

// ✅ Correct ways:
// const obj3 = Object.assign({}, obj1, obj2, obj4) // Sabko ek object me merge karta hai
const obj3 = {...obj1, ...obj2} // Spread operator se merge

// console.log(obj3); // Output: {1: "a", 2: "b", 4: "a", 5: "b"}


// 🔹 Array of Users
const user = [
    { id: 1, email: "anish@gmail.com" },
    { id: 2, email: "anish@gmail.com" },
    { id: 3, email: "anish@gmail.com" },
    { id: 4, email: "anish@gmail.com" }
]

// Kisi specific user ka email access karna
user[1].email // Output: "anish@gmail.com"


// 🔹 Object Utilitie
// console.log(Object.keys(tinderUser));     // ["id", "name", "isLogedIn"]
// console.log(Object.values(tinderUser));   // ["abfs25e47", "sammy", false]
// console.log(Object.entries(tinderUser));  // [["id", "abfs25e47"], ["name", "sammy"], ["isLogedIn", false]]

// console.log(tinderUser.hasOwnProperty('isLoged')); // false (galat key likhi hai)


// 🔹 Object Destructuring
const cource = {
    courceName: "JS in hindi",
    price: "999",
    courceInstructor: "hitesh"
}

console.log(cource.courceInstructor) // Direct access

// Destructuring se naam change karke access
const { courceInstructor: instructor } = cource
console.log(instructor) // Output: "hitesh"


// 🔹 Sample Object (for reference
// Ek sample object jisme naam, course aur price diya gaya hai
const sample = {
    name: "Anish",
    cource: "JS in hindi",
    price: "free"
}
