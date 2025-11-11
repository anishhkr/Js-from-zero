// 🔹 WHILE LOOP — Jab tak condition true hai, tab tak loop chalega
let index = 0
while (index <= 10) {
    console.log(`Value of index is: ${index}`) // 0, 2, 4, ..., 10
    index += 2 // 2 se increment ho raha hai
}


// 🔹 WHILE LOOP with Array Iteration
let myArr = ["Batman", "Superman", "Flash"]
let arr = 0

while (arr < myArr.length) {
    console.log(myArr[arr]) // Array ke elements ek-ek karke print honge
    arr++
}


// 🔹 DO-WHILE LOOP — Pehle ek baar chalega hi, phir condition check karega
let score = 1
do {
    console.log(`Score is ${score}`) // 1 se 10 tak print karega
    score++
} while (score <= 10)


// 🧠 Key Concepts for Revision
// ____________________________________________________________________________
// | Loop Type            | Behavior                                          |
// |----------------------|---------------------------------------------------|
// | `while`              | Pehle condition check, fir chalega                |
// | `do-while`           | Pehle ek baar chalega, fir condition check karega |
// | `index += 2`         | 2 ke step me increment                            |
// | `arr < array.length` | Array ke end tak loop                             |
// ----------------------------------------------------------------------------