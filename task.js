// Question-1
var str1 = "      Devara"
var str2 = "part1     "
var concat = str1.concat("", str2)
var trimStr = concat.trim();
var resultStr = trimStr.toUpperCase();
console.log(resultStr);

// Question-2
var a = "hi iam fine";
var middleStr = a.slice(3, 6);
var charindexLast = middleStr.indexOf("m")
var lowerCaseStr = middleStr.toLowerCase();
console.log(charindexLast);
console.log(lowerCaseStr);

// Question-3
var SingleChar = "p";
var wordStr1 = "anda";
var concatStr = SingleChar.concat(wordStr1);
var upperStr = concat.toUpperCase();
var result = upperStr;
console.log(result);

// Question-4
var a = "vamsi";
var b = "enduri";
var firstStr = a.slice(0, 3);
var secondStr = b.slice(-3);
// var concatStr=firstStr.concat(secondStr);
var resultStr = a.charAt(0).toUpperCase();
console.log(result);

// Question-5
var str = "       devara";
var trimStr = str.trim();
var charFirst = trimStr.charAt(0);
var lowerChar = trimStr.charAt.apply(trimStr.length - 1).toUpperCase();
var extractMid = trimStr.slice(1, 4);
console.log(extractMid);

// Question-6
var a = "hello there,how are you";
var b = a.split(" ");
var result = b.indexOf("are");
console.log(result);

// Multiple question
// Question-7
const smartphone = {
  brand: "Oneplus",
  model: "noredce5g",
  price: 25000
};
Object.seal(smartphone);
smartphone.price = 30099;
const isSealed = Object.isSealed(smartphone);
console.log(smartphone);
console.log(isSealed);

// Question-8
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  publishedYear: 1960
};
Object.freeze(book);
book.publishedYear = 1961;
const isFrozen = Object.isFrozen(book);
console.log(book);
console.log(isFrozen);

// Question-9
const person = {
  firstName: "Lakshmi",
  lastName: "prasanna",
  age: 22
};
const keys = Object.keys(person);
console.log("Keys:", keys);
const values = Object.values(person);
console.log("Values:", values);

// Question-10
const course = {
  title: "Introduction to JavaScript",
  instructor: "Jane Smith",
  duration: "4 weeks"
};
const entries = Object.entries(course);
console.log("Key-Value Pairs:", entries);
delete course.duration;
console.log("Updated Course Object:", course);

// Question-11
const employee = {
  name: "Alice Johnson",
  position: "Software Developer",
  salary: 80000
};
Object.seal(employee);
employee.position = "Senior Software Developer";
employee.department = "Engineering";
const key = Object.keys(employee);
console.log("Properties after sealing:", key);
console.log("Updated Employee Object:", employee);

// Question -12
function extractMiddleToUppercase(str) {
  const len = str.length;
  if (len === 0) {
    return "String is empty!";
  }
  const middleIndex = Math.floor(len / 2);
  if (len % 2 === 0) {
    const middlePart = str.slice(middleIndex - 1, middleIndex + 1);
    return middlePart.toUpperCase();
  } else {
    const middlePart = str.charAt(middleIndex);
    return middlePart.toUpperCase();
  }
}
console.log(extractMiddleToUppercase("Goodmorning"));
console.log(extractMiddleToUppercase("Goodafternoon"));
console.log(extractMiddleToUppercase("Goodevening"));

// // Question-13
var a = "Prasanna";
var b = a.toUpperCase(a);
console.log(b);
var c = b.length;
console.log(c);

// Question-14
var a = "Jonnalagadda"
var b = a.charCodeAt(4);
console.log(b);

// Question-15
var a = "   lakshmi   prasanna    jonnalagadda     ";
console.log(a.trim());
var b = ["chandana", "meghana", "vandana", "aha", "srujana"]
var c = b.slice(1, 3);

// Question-16
var a = "Hai  ";
var b = "Hello How Are You";
var c = a.concat(b);
console.log(c);
console.log(b.toLocaleLowerCase())

// Question-17
var a = "   hello world";
var b = a.trimStart();
var c = b.slice(8);
console.log(c);

// Question-18
var a = "swarna";
var index = 4;
var c = a.charAt(index).toUpperCase;
console.log(c);

// Question-19
var a = 10;
var b = 20;
var c = 30;

var result = a * b + c;

var isGreaterthan100 = result > 100;
var isLessthan100 = result < 100;
var isEqualto100 = result === 100;

console.log("Result:", result);
console.log("is Greater than 100?", isGreaterthan100);
console.log("is less than 100?", isLessthan100);
console.log("Is equal to 100?", isEqualto100);

// Question-20
var a = 10;
var b = 20;
var result = (a > 5) && (b < 15)
console.log(result);

// Question-21
var a = 25;
var b = 35;

var message = (a > b)
  ? "a is larger than b"
  : (a < b)
    ? "b is larger than a"
    : "Both numbers are equal";

console.log(message);

// Question-22
var a = 15;
var b = 10;

var subtractionResult = a - b;
console.log("Subtraction Result:", subtractionResult);

var divisionResult = a / b;
console.log("Division Result:", divisionResult);

console.log("Is Subtraction Result Even?", [subtractionResult].map(num => num % 2 === 0).toString());
console.log("Is Division Result Even?", [divisionResult].map(num => num % 2 === 0).toString());

// Question-23
var age = 18;

var isEqual = (age == 18);
console.log("Is age equal to 18 using == ?", isEqual);

var isStrictEqual = (age === 18);
console.log("Is age strictly equal to 18 using === ?", isStrictEqual);

var isGreaterOrEqual = (age >= 18);
console.log("Is age greater than or equal to 18?", isGreaterOrEqual);