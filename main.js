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

// Exercise - function as a value

function num_summation(a, b, c){
    return a + b + c; 
}

console.log(num_summation(4, 7 , 5));
console.log(num_summation(1, 2, 3));
console.log(num_summation(9, 1, 3));

function hello(someone){
    return "Hello " + someone + ".";
}

console.log(hello("Abdullah"));
console.log(hello("Salman"));
console.log(hello("Stranger"));

console.clear()


// Homework

function nameAge(name_a, age_a){
    console.log("Your name: " + name_a + " Your age: " + age_a);
}

nameAge("Ali", 16);
nameAge("Nasser", 17);
nameAge("Bander", 15);

console.log("-------------")

function add_numbers(i, j){
    return i + j;
}

console.log(add_numbers(3, 3));
console.log(add_numbers(2, 2));
console.log(add_numbers(7, 1));

console.log("-------------")

function subtract_numbers(h, k){
    return h - k;
}

console.log(subtract_numbers(7, 2));
console.log(subtract_numbers(9, 3));
console.log(subtract_numbers(4, 4));

console.log("-------------")

function multiplicationTwoNumbers(r, z){
    return r * z;
}

console.log(multiplicationTwoNumbers(2, 9));
console.log(multiplicationTwoNumbers(4, 8));
console.log(multiplicationTwoNumbers(3, 3));

console.log("-------------")

function remaining_3(v){
    return v % 3;
}

console.log(remaining_3(3));
console.log(remaining_3(7));
console.log(remaining_3(8));

console.log("-------------")

function stringLength(statment){
    return statment.length
}

console.log(stringLength("Abdullah"));
console.log(stringLength("DevOps Engineer"));
console.log(stringLength("JavaScript is amazing"));

console.log("-------------")

function firstLetter(word){
    return word[0]
}

console.log(firstLetter("Java"));
console.log(firstLetter("Script"));
console.log(firstLetter("done"));