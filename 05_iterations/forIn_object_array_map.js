// 🔹 FOR-IN LOOP with OBJECT — ✅ Works perfectly
const myObj = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

for (const key in myObj) {
    console.log(`${key} for ${myObj[key]}`) // Output: js for Javascript, etc.
}


// 🔹 FOR-IN LOOP with ARRAY — ✅ Works, but gives index not value
const programing = ["js", "rb", "py", "java", "cpp"]

for (const key in programing) {
    console.log(programing[key]) // Output: js, rb, py, java, cpp
    // key = index (0,1,2...), value = programing[key]
}


// 🔹 FOR-IN LOOP with MAP — ❌ Not valid
const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")
map.set('IN', "India") // Duplicate key overwrite ho jata hai

for (const key in map) {
    console.log(key) // ❌ TypeError: map is not iterable with for-in
}


// 🧠 Key Concepts for Revision
// _______________________________________________________________________________
// | Loop Type     | Works With                         | Iterates Over          |
// |---------------|------------------------------------|------------------------|
// | `for-in`      | Object, Array                      | Keys / Indexes         |
// | `for-of`      | Array, String, Map                 | Values                 |
// | `Map`         | Use `for-of`                       | `[key, value]` pairs   |
// | `Object`      | Use `for-in` or `Object.entries()` | Keys or `[key, value]` |
// -------------------------------------------------------------------------------