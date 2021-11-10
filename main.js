console.log('Week 1 - Day 4');
console.log('Tuwaiq Academy   JS');

// Exercise - Logic opreations

let ex_1b = (false && false) || true; // true
let ex_2b = (false && true) || false; // false
let ex_3b = 10 > 25 * 12 || false; // false
let ex_4b = true || (17 * 1 > 4 && true); // true
let ex_5b = (!false && true) || !false; // true
let ex_6b = 3 * 7 + 4 <= 6 || (true && 7 > 8); // false
let ex_7b = (true && (true || false)) || false; // true
let ex_8b = (false && true) || true || false; // true
let ex_9b = (15 % 3) + 6 > 10 || 40 < 7; // false
let ex_10b = 9 + 6 > 10 && 13 <= 33; // true

// Exercise - calling function

function javascript_5(){
    console.log("I like JavaScript");
    console.log("I like JavaScript");
    console.log("I like JavaScript");
    console.log("I like JavaScript");
    console.log("I like JavaScript");
}

javascript_5();

function infoAboutMe(){
    console.log("Hi, I am Abdullah.");
    console.log("My age is 26.");
    console.log("I am an electrical engineer and DevOps engineer.");
    console.log("I am learning JavaScript because I love programming.");
    console.log("This course is given by Tuwaiq-1000");
}

infoAboutMe();

// Exercise - function parameters.

function greet(name){
    console.log("Welcome " + name + ", enjoy learning JavaScript.");
}

greet("Abdullah");
greet("Ali");
greet("Mohammed");

function sumTwoNumbers(x, y){
    result = x + y;
    console.log(result)
}

sumTwoNumbers(3, 2);
sumTwoNumbers(2, 2);
sumTwoNumbers(4, 7);