// 🔹 Function to print each letter of your name
function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
}
// sayMyName(); // Call karne par naam print hoga


// 🔹 Function to add two numbers
function addTwoNum(num1, num2) {
    // num1 aur num2 parameters hain (input le rahe hain)
    return num1 + num2; // result return kar rahe hain
}
const result = addTwoNum(3, 5); // 3 aur 5 arguments hain
// console.log("Result:", result); // Output: 8


// 🔹 Function with default parameter
function loginUserMessage(userName = "User") {
    // Agar koi naam na diya ho to "User" default hoga
    return `${userName} just logged in`;
}
// console.log(loginUserMessage("Anish")); // Output: Anish just logged in


// 🔹 Function using rest operator (...num1)
function calculateCartPrice(val1, val2, ...num1) {
    // val1 aur val2 ko chhodkar baaki sab num1 array me aa jayenge
    return num1;
}
// console.log(calculateCartPrice(23, 32, 43, 53, 532, 332));
// Output: [43, 53, 532, 332]


// 🔹 Function to handle object input
const user = {
    username: "Anish",
    price: 199
};
function handleObject(anyobject) {
    // Object ke andar ke values ko access kar rahe hain
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`);
}
// handleObject(user); // Output: Username is Anish and price is 199
handleObject({
    username: "Sam",
    price: 399
}); // Output: Username is Sam and price is 399


// 🔹 Function to return second value from array
const myNewArray = [200, 399, 599, 999];
function returnSecondValue(getArray) {
    return getArray[1]; // Array ka second element return karega
}
// console.log(returnSecondValue(myNewArray)); // Output: 399
console.log(returnSecondValue([200, 399, 999])); // Output: 399