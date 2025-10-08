// 🔢 Number vs Number Comparison
console.log(2 > 1);     // true   → 2 is greater than 1
console.log(2 >= 1);    // true   → 2 is greater than or equal to 1
console.log(2 < 1);     // false  → 2 is not less than 1
console.log(2 == 1);    // false  → 2 is not equal to 1
console.log(2 != 1);    // true   → 2 is not equal to 1

// 🔤 String vs Number Comparison (Type Coercion)
console.log("2" > 1);       // true   → "2" becomes number 2 → 2 > 1
console.log("02" > 1);      // true   → "02" becomes number 2 → 2 > 1
console.log("2" == 2);      // true   → Loose equality: "2" → 2 → 2 == 2
console.log("2" === 2);     // false  → Strict equality: string ≠ number

// 🧼 null vs Number Comparison
console.log(null > 0);      // false  → null → 0 → 0 > 0 → false
console.log(null >= 0);     // true   → null → 0 → 0 >= 0 → true

/* NOTE:
   Relational operators (>, <, >=, <=) convert null to number (0)
*/

// ⚖️ null vs Equality Comparison
console.log(null == 0);             // false  → null is not loosely equal to 0
console.log(null == undefined);     // true   → Special case: null == undefined
console.log(null === undefined);    // false  → Strict comparison: type mismatch

/* NOTE:
   Equality operators (==) treat null equal only to undefined, not to numbers
*/

// ❌ NaN Comparison
console.log(NaN == NaN);    // false  → NaN is never equal to anything, even itself

/* TIP:
   Use Number.isNaN(NaN) → true
*/

// 🔍 Bonus: Other Loose vs Strict Comparisons
console.log(false == 0);    // true   → false → 0 → 0 == 0
console.log(false === 0);   // false  → boolean ≠ number
console.log("" == 0);       // true   → empty string → 0 → 0 == 0
console.log("" === 0);      // false  → string ≠ number