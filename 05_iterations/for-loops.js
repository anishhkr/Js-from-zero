// 🔹 Basic For Loop
for (let i = 1; i <= 10; i++) {
    const element = i
    if (element == 5) {
        // console.log("5 is the best number.") // Jab i = 5 ho
    }
    // console.log(element) // 1 se 10 tak print karega
}


// 🔹 Nested For Loop (Multiplication Table)
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop value ${i}`)
        // console.log(`${i} * ${j} = ${i * j}`) // Multiplication table
    }
}


// 🔹 Looping through an Array
let myArr = ["Batman", "Flash", "Superman"]
// console.log(myArr.length) // Output: 3

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i]
    // console.log(element) // Prints each superhero
}


// 🔹 Break Statement — Loop ko turant rok deta hai
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("5 is Detected!") // Jab 5 mile to break
//         break
//     }
//     console.log(`Value of index is ${index}`)
// }


// 🔹 Continue Statement — Current iteration skip karta hai
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 is Detected!") // 5 pe message dega
        continue // 5 ko skip karega, loop chalega
    }
    console.log(`Value of index is ${index}`)
}


// 🧠 Key Concepts for Revision
// __________________________________________________________________________________
// | Concept             | Explanation                                              |
// |---------------------|----------------------------------------------------------|
// | `for` loop          | Repeated execution ke liye                               |
// | `nested loop`       | Loop ke andar loop (e.g., tables)                        |
// | `array.length`      | Array ke elements count karta hai                        |
// | `break`             | Loop ko turant stop karta hai                            |
// | `continue`          | Current iteration skip karta hai, next pe jump karta hai |
// ----------------------------------------------------------------------------------