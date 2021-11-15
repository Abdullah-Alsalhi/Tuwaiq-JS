console.log('Week 2 - Day 1');
console.log('Tuwaiq Academy   JS');

// Exercise - if statement 

function numberChecker(num_1, num_2){
    if (num_1 > num_2){
        return num_1;
    };
    if (num_1 === num_2){
        return "The numbers are equal";
    };
    return num_2;   // functions only return once and here will return the last chance 
};

function stringChecker(string){
    if (string === "JavaScript"){
        return "Welcome";
    };
    return "Goodbye";
};

numberChecker(3, 1);
numberChecker(3, 3);
numberChecker(1, 3);


stringChecker("JavaScript");
stringChecker("Programming Mode");

// Exercise - if else statement 

function NumCheck(numberA, numberB){
    if (numberA > numberB){
        return numberA;
    }
    else {
        return "The numbers are equal";
    }; 
};

function strCheck(note){
    if (note === "JavaScript"){
        return "Welcome";
    } else {
        return "Goodbye";
    };
};

NumCheck(10, 3);
NumCheck(9, 9);
NumCheck(2, 7);

strCheck("JavaScript");
strCheck("javascript");

// Exercise - if else if else statement

function numberCheckValue(numA, numB){
    if (numA > numB){
        return numA;
    }
    else if (numA < numB){
        return numB;
    } else {
        return "The numbers are equal.";
    };
};

numberCheckValue(7, 4);
numberCheckValue(7, 9);
numberCheckValue(7, 7);

function codingLanguage(language){
    if (language === "JavaScript"){
        return "Web Developer";
    } else if (language === "Swift"){
        return "IOS Developer";
    } else if (language === "Kotlin"){
        return "Android Developer";
    } else {
        return "Other Developer";
    };

};

codingLanguage("JavaScript");
codingLanguage("Swift");
codingLanguage("Kotlin");
codingLanguage("Python");

// Homework 

// function returns person's name if his age is bigger ro equal to 18 , otherwise return his age. *[if else]*

function nameAge(name, age){
    if (age >= 18){
        return name;
    }else{
        return age;
    };
};

nameAge("Abdullah", 27);
nameAge("Ali", 13);
nameAge("Mohammed", 18);

/* - function returns "great" if the grade is bigger or equal to 70 , 
and returns "good" if the grade is less than 70 and bigger than 50 
and returns "failed" if the grade is equal to 50 or less than 50. *[else if]* */

function testGrade(grade){
    if (grade >= 70){
        return "great";
    }else if (grade < 70 && grade > 50){
        return "good";
    }else{
        return "failed";
    };
};

testGrade(70);
testGrade(55);
testGrade(50);

/* function takes two numbers and operator sign: *[else if]*
    - if the sign "-" return the subtraction first number from the second number.
    - if the sign "+" return the addition of two numbers.
    - if the sign "/" return the first number divided to second number.
    - if the sign "*" return the multiplication of two numbers. */

function calculator(first_num, second_num, sign){
    if (sign === "-"){
        return first_num - second_num;
    }else if (sign === "+"){
        return first_num + second_num;
    }else if (sign === "/"){
        return first_num / second_num;
    }else if (sign === "*"){
        return first_num * second_num;
    };
};

calculator(3, 2, "-");
calculator(3, 2, "+");
calculator(3, 2, "/");
calculator(3, 2, "*");