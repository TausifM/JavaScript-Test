let first = "knowledge is power but enthusiasm pulls the switch";
let second = "Do or do not, there is no try";
let third = "4,8,5,5,5,6,4,6,2,1436";

// you can this string literals

// console.log("tausif loves code".toUpperCase());

// let mySpilit = third.split(",");
// console.log(mySpilit);

// let mySlice = first.slice(10, 20);
// console.log(mySlice);

// let mySubstr = first.substr(); //two parameter from number length of a number;
// console.log(mySubstr); // power on the 13 index no. & 5 is a length;

/* let myEndsWith = second.endsWith("try");
console.log(myEndsWith);

let myStartsWith = second.startsWith("Do");
console.log(myStartsWith);

let myInclude = second.includes("there");
console.log(myInclude); */

// let myRepeat = "Ha!!!!!".repeat(3);
// console.log(myRepeat);

let myTrim = "    bloated            ";
console.log(myTrim.length); //23
console.log(myTrim.trim().length); //7

// =============================== STRING ==============================
// A JS string is zero or more characters written inside quotes
// JS strings are used for storing and manipulating text.
// You can use single or double quotes

// Strings  can be crreated as primitives ,
// from strings literals, or as objects, using the String() constructor

// =============================================================

// What we have to see here :
// 1. Escape Character
// 2. Finding a String in a String
// 3. Searching for a String in a String
// 4. Extracting string part
// 5. Replacing String Content
// 6. Extracting String Characters

let myName = "Tausif";
let myName2 = "Tausif";

let github = new String("TausifM");

console.log(myName);
console.log(myName2);
console.log(github); // [String: 'TausifM']

// ===================== Escape Character =================
let sentence = 'We are the so-called "Vikings" from the north '; // with double quotes inside of doble quotes
// Error comes SyntaxError: Unexpected identifier
// to avoid this you van use single quotes or backslash \ - Escape Character
console.log(sentence);
console.log(sentence.indexOf("t", 7));
console.log(sentence.lastIndexOf("t", 43));

// ====================== Searching for a String in a String ================

let searchText = sentence.search("Vikings"); // 22
console.log(searchText);

// ====================== Extracting Strings Parts ==========================

// Their are 3 Method of Extracting
// 1. Slice (start, end)
// 2. SubString (start, end)
// 3. Substr(start, length)

// Slice Method - It extracts a part of a string and returns the extracted part
// in a NEW STRING

const str = "Apple, Banana, Kiwi";
//const res  = str.slice(0,4)
const res = str.slice(7, -2);
//const res = str.slice(7)

// In the above example when -ve number put at the end means it deleting
// the last character of the data, in here -2 so two character will be erased
console.log(res); //Banana, Ki

// The Slice methods includes the starting index number value and
// doesnot include the ending number value

// ============================ Challenge Time =============================

// Ques: Display only 280 Charactyers of a String like the one used in Twitter ?

let myTweets =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut";

let myActualTweet = myTweets.slice(0, 280);
console.log(myActualTweet);

// =================== SubString ==============================
// The Substring method is similar to slice()
// Difference is that substring () cannot accept negative indexes

const str1 = "Apple, Banana, Kiwi";
const res1 = str1.substring(0, 4);
console.log(res1);

// ===================== SubStr Method =========================
// This is also similar to slice
// the only differnce is that second parameter specifies the length
// of the extracted parts
// If you tried to put -ve value in the second arguments then it doesn't give
// the value

const str2 = "Apple, Banana, kiwi";
const res2 = str2.substr(-4);
console.log(res2); // kiwi
// It gives the last value

// ===================== Replace String Content() ==============
// String.prototype.replace(searchFor, replaceWith)
// The replace() method replaces a specified value
// with another value in a STRING

// POINTS TO REMEMBER
// 1. The replace() method doesnot change the string
// is called on. It returns a new String.
// 2. By default the replace method replaces only the
// first match
// 3. by default replace method is a case sensitive

const str3 = "Apple, Banana, kiwi";
const res3 = str3.replace("Apple", "Mango");
console.log(res3);

// ================ Extracting String Character =================

// There are 3 methods for extracting string characters
// 1. charAt(position)
// 2. charCodeAt(position)
// 3. Property Access []

// CharAt Method
// It returns the cahracter at a specified index ( position )
// in a string
let str4 = "Hello world";
console.log(str4.charAt(0)); // H
// you can use this in a fun game like chart at

// CharCode At
// It Return the unicode of the character
// at a specified index in a string
// The method returns a UTF-16 code
// (an integer between 0 and 65535)
// UTF-8 is a popular Unicode encoding which
// has 88bit code units

let str5 = "Hello world";
console.log(str5.charCodeAt(0)); // 72

// ====================Property Access =========================
// ES5 2009 allows property access on strings
let str7 = "Hello world";
console.log(str7[0], "Property Access");

// ===================== Challenge Time =========================

// Return UNICODE of thr last character in a String ...?

let str6 = "HELLO WORLD";
console.log(str6.length); // 11
console.log(str6.charCodeAt(10));

// ================== Converting String to Array ======================

// A string can be converted to an array with the //
// split method

const txt = "a,b,c,d";
console.log(txt.split(","));
console.log(txt.split(" "));
