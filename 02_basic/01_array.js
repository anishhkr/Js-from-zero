//Array
const myArr = [0, 1, 2, 3, 7] //Ek basic number array banata hai
const myHeros = ["saktiman", "nagraj"] //Ek string array banaya with hero names

const myArr2 = new Array(1,2,3,4) //Array constructor se array banaya
console.log(myArr[1]); //Index 1 per value print karega -> 1

//Array Method
myArr.push(6)
myArr.push(7)
//Array ke end me value add karta hai
console.log(myArr); // Output: [0, 1, 2, 3, 7, 6, 7]

myArr.pop(); //Last element remove karta hai
console.log(myArr); // Output: [0, 1, 2, 3, 7, 6]

myArr.unshift(9); //Array ke start me value add karta hai
console.log(myArr); // Output: [9, 0, 1, 2, 3, 7, 6]

myArr.shift(); //First element add karta hai
console.log(myArr); // Output: [0, 1, 2, 3, 7, 6]

//Search & Conversion Method

console.log(myArr.includes(9)); //Check karta hai ki 9 array mein hai ya nahi -> false
console.log(myArr.indexOf(7)); // 7 ka index batata hai -> 4

const newArr = myArr.join() //Array ko comma-seperated string mein convert karta hai
console.log(myArr); //Original array unchanged
console.log(newArr); // Output: '0,1,2,3,7,6'
console.log(typeof newArr); // newArr ka type batata hai -> 'string'


//Slice and Splice me difference

console.log("A", myArr); //Original array before slicing
const myArr3 = myArr.slice(1,3) //Index 1 se 2 tak ka copy banata hai (non-destructive)
console.log(myArr3); // Output: [1, 2]

console.log("B", myArr);// Original array unchanged after slice
const myArr4 = myArr.splice(1,3) // Index 1 se 3 elements remove karta hai (destructive)
console.log(myArr4); // Output: [1, 2, 3]
console.log("C", myArr);// Original array modified → [0, 7, 6]


// 📘 Summary:

// | #Method    | #Kaam kya karta hai                     | #Array ko change karta hai? | 
// | push()     | End mein add karta hai                  | ✅ Yes                     | 
// | pop()      | End se remove karta hai                 | ✅ Yes                     | 
// | unshift()  | Start mein add karta hai                | ✅ Yes                     | 
// | shift()    | Start se remove karta hai               | ✅ Yes                     | 
// | includes() | Value exist hai ya nahi check karta hai | ❌ No                      | 
// | indexOf()  | Value ka index batata hai               | ❌ No                      | 
// | join()     | Array ko string mein convert karta hai  | ❌ No                      | 
// | slice()    | Part copy karta hai (non-destructive)   | ❌ No                      | 
// | splice()   | Part remove/insert karta hai            | ✅ Yes                     | 

