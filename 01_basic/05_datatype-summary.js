// # Datatype=> There are two type of datatype:-

// 1.> Primitive datatype
// 2.> Reference (Non-Primitive) datatype

// 1.> Primitive datatype=> There are 7 type of datatype:-
//     (i) String => A sequence of characters enclosed in quotes.
//         ex.- let Nmae = "Anish"

//     (ii) Number => Represent both integer and floating-point number.
//          ex.- let number = 42

//     (iii) Boolean => Represent logical value: true or false.
//           ex.- let isReady = true;

//     (iv) Null => Represent the intentional absence of any object value.
//          ex.- let b = null;

//     (v) Undefined => A variab;e declared but not assigned a value.
//         ex.- let userEmail; // userEmail is Undefined

//     (vi) Symbol => A unique and immutable identifier (Used mostly in advanced scenarios).
//          ex.- let id = symbol("id");

//     (vii) BigInt => Used for very large integers beyond safe limit of Number.
//           ex.- let big = 12345678901234567;

// 2.> Reference (Non-Primitive) datatype => There are three types:-
//     (i) Array => Ordered list of values (indexed).
//         ex.- const heros = ["shaktiman", "ironMan", "naagraj"]

//     (ii) Object => Key-value pairs used to represent structured data.
//          ex.- let myObj = {
//             name = "Anish";
//             age = 22;
//          }

//     (iii) Functions => A block of code designed to perform a task.
//           ex.- const myFunction = function(){
//               console.log("Hello Anish!");
//           }


// Datatype                        TypeOf(Result)
// String                          "String"
// Number                          "number"
// Boolean                         "boolean"
// Null                            "object"
// Undefined                       "undefined"
// Symbol                          "symbol"
// BigInt                          "bigint"
// Array                           "object"
// Object                          "object"
// Function                        "function"




//++++++++++++++++++++++++++++++++++++++++++++++++++++

// # There are two type of Memory:-
// (i) Stack Memory:- Primitive values जैसे number, string को store करता है। Fast और fixed-size होता है।
//                    Primitive datatype me "Stack memory" use hota hai.
//                    Stack store Copy values(Primitive type).

let myYouTubeName = "Anishhkr.com"

let anotherName = myYouTubeName
anotherName = "Anish_aryan.com"

console.log(anotherName)
console.log(myYouTubeName)

// (ii) Heap Memory: Objects और arrays को store करता है। Dynamically allocate होता है।
//                   Non-Primitive datatype me "Heap memory" use hota hai.
//                   Heap store Reference values(Objects).

let userOne = {
    email: "use@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "anish@google.com"

console.log(userOne.email);
console.log(userTwo.email);

