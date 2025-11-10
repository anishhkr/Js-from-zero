// 🔹 SWITCH STATEMENT — Multiple condition check karne ka structured tareeka

const month = 3

switch (month) {
    case 1:
        console.log("January")
        break // break lagana zaroori hai warna next cases bhi execute honge

    case 2:
        console.log("February")
        break

    case 3:
        console.log("March") // ✅ Yeh case match karega
        break

    case 4:
        console.log("April")
        break

    default:
        console.log("Default case match") // Jab koi case match na ho to yeh chalega
}

// 🧠 Key Concepts for Revision
// ________________________________________________________________________________
// | Concept          | Explanation                                               |
// |------------------|-----------------------------------------------------------|
// | `switch`         | Multiple values ke against ek variable ko check karta hai |
// | `case`           | Har possible value ke liye ek block                       |
// | `break`          | Execution ko stop karta hai, warna next case bhi chalega  |
// | `default`        | Jab koi bhi case match na kare to yeh execute hota hai    |
// --------------------------------------------------------------------------------