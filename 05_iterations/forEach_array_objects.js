// 🔹 Basic forEach loop — Array ke har item par function run hota hai
const coding = ["js", "ruby", "java", "python", "cpp"]

// ✅ Anonymous function
coding.forEach(function (item) {
    console.log(item) // Output: js, ruby, java, python, cpp
})

// ✅ Arrow function
coding.forEach((item) => {
    console.log(item)
})

// ✅ Named function
function printMe(item) {
    console.log(item)
}
coding.forEach(printMe) // Har item ko printMe function me bhej raha hai

// ✅ Accessing item, index, and full array
coding.forEach((item, index, arrList) => {
    console.log(item, index, arrList)
    // item = current value
    // index = current position
    // arrList = full array
})


// 🔹 forEach with Array of Objects
const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

// ✅ Accessing object properties inside forEach
myCoding.forEach((item) => {
    console.log(item.languageName) // Output: JavaScript, Java, Python
})


// 🧠 Key Concepts for Revision
// _________________________________________________________________________________
// | Concept             | Explanation                                             |
// |---------------------|---------------------------------------------------------|
// | `forEach()`         | Array ke har element par ek baar function run karta hai |
// | `item`              | Current value                                           |
// | `index`             | Current position                                        |
// | `arrList`           | Full array                                              |
// | Object iteration    | `item.propertyName` se access karte hain                |
// ---------------------------------------------------------------------------------