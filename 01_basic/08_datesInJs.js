let myDate = new Date(); 
// Current date & time ka object banata hai

console.log(myDate.toString()); 
// Full date-time string return karta hai → readable format

console.log(myDate.toTimeString()); 
// Sirf time part return karta hai → HH:MM:SS GMT format

console.log(myDate.toDateString()); 
// Sirf date part return karta hai → e.g. 'Wed Oct 22 2025'

console.log(myDate.toISOString()); 
// ISO format mein date-time return karta hai → '2025-10-22T10:16:00.000Z'

console.log(myDate.toLocaleString()); 
// Local format mein date & time return karta hai → e.g. '22/10/2025, 3:46:00 pm'

console.log(myDate.toLocaleDateString()); 
// Sirf local date part return karta hai → e.g. '22/10/2025'

console.log(myDate.toLocaleTimeString()); 
// Sirf local time part return karta hai → e.g. '3:46:00 pm'

console.log(myDate.toJSON()); 
// Date ko JSON-compatible ISO string mein convert karta hai

console.log(myDate.toTimeString()); 
// Repeat: time part in GMT format

console.log(typeof myDate); 
// Output: 'object' → Date is an object type

//const myCreatedDate = new Date(2004, 2, 10, 5, 0); 
// Custom date-time banaya: March 10, 2004 at 5:00 AM (month 2 = March)

const myCreatedDate = new Date("10-03-2004"); 
// String format se date banaya: 10 March 2004

console.log(myCreatedDate.toLocaleString()); 
// Local format mein custom date-time print karega

let myTimeStamp = Date.now(); 
// Current time ka timestamp (milliseconds since Jan 1, 1970)

console.log(myTimeStamp); 
// Milliseconds value print karega

console.log(myCreatedDate.getTime()); 
// Custom date ka timestamp return karega

console.log(Math.floor(Date.now()/1000)); 
// Current timestamp ko seconds mein convert karega

let newDate = new Date(); 
// Ek aur current date object banaya

console.log(newDate); 
// Full date-time object print karega

console.log(newDate.getMonth() + 1); 
// Current month (0-based index) → +1 se actual month milega

console.log(newDate.getDay()); 
// Weekday number return karega → 0 = Sunday, 6 = Saturday

console.log(newDate.toLocaleString('default', {
    weekday: 'long'
})); 
// Current day ka full name return karega → e.g. 'Wednesday'

// 📘 Bonus Tip:
// - Date.now() → timestamp in milliseconds
// - getMonth() → 0-based index (January = 0)
// - toLocaleString() → region-specific format ke liye best
// - weekday: 'long' → full day name like 'Monday', 'Tuesday'
