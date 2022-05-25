let today = new Date();

let tausif = new Date("May 23, 1995 12:01:23");

// let tausif = new Date('1995-05-23T07:01:23')
// let tausif = new Date(1995, 23, 05);
// let tausif = new Date(1995, 23, 05, 1, 23);

// var elapsedTime = today - tausif;
// console.log(elapsedTime);

//get parts
console.log(tausif.getDate()); //23

/* 
getMonth()
getDay()

getHours()
getMinutes()
getSeconds()
getMilliseconds() 
*/


// ====================== Date Method and Time Method ==================
// JS Date Object Represents a single moments in time in a 
// platform independent format Date Object contains a Number 
// that represnts milliseconds since January 1, 1970, 00:00:00 UTC

//  Creating Date Object 
// Their are 4 ways 
// 1. new Date()
// 2. new Date(milliseconds)
// 3. new Date(dateString)
// 4. new Date(year, month, day, hours, minutes, seconds, milliseconds)

let curTime = new Date();
console.log(curTime.setTime(5));
console.log(curTime.setHours(5));
console.log(curTime.setMinutes(5));
console.log(curTime.setSeconds(5));
console.log(curTime.setMilliseconds(5));