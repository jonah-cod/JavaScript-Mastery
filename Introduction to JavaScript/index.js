// // This is the third method to inject JS in html

// //alert("Outputing from an external file")

// //declaring variables
// let session;
// const pi = 3.142;

// //assigning

// session = "Introduction to JS";
// console.log(session, pi);

// //re-assigning variables
// session = "JS functions"

// console.log(session)
// // // you cannot re-assign constants
// // pi = "re-assigning const";

// let class_name = "JavaScript Mastery";
// console.log(class_name)

// Arithmetic operations
//1 .addition

// let a = 15;
// let b = 20;
// let sum = a+b;
// console.log(sum)

// //addition on strings

// let name = "Jane";
// let greetings = "Good morning."

// console.log(name + ", "+ greetings)

// //2 subtraction

// let y = 50;
// let z = 34;
// console.log(y-z);

// //3. multiplication
// let length = 12;
// let width = 4;

// console.log("The area of the rectangle is:", length*width);

// //4.division
// let sweet = 36;
// let kids = 9;
// console.log("Each kid got " + 36/9 + " sweets");

// // 5. exponential (raised to) ^

// let num = 3;

// console.log("Three raised to three is", 3**3);

// // 6. modulus % ("The remainder")

let number = 10;
console.log("Ten divided by two gives a remainder of: ", number%2);

// 7 increment ++
let x = 4;
x = x+1;
console.log(x)
x = ++x
console.log(x)

// 8 decrement --

let p = 4;
p = p-1;
console.log(p)
p = --p
console.log(p)

/// Assignment Operators

let marks;
marks = 78;
let marks2 = 67;

let sum_marks = 150;
// +=
sum_marks +=marks + marks2;
console.log(sum_marks)

//-=
let credit_total = 50;
let credit_spend = 20;

credit_total -=credit_spend // credit_tottal = credit_total - credit_spend
console.log(credit_total)

//\*=

let length = 4;
length *=length
console.log(length)