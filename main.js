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

