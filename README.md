# Tuwaiq-JS
**Tuwaiq-Academey course of JavaScript programming language.**

#### Exercise - if statement 
**create the following function and call it three times using (if)**
- function takes two numbers and returns bigger number or " The numbers are equal " in case they are equal.
```javascript
function numberChecker(num_1, num_2){
    if (num_1 > num_2){
        return num_1;
    };
    if (num_1 === num_2){
        return "The numbers are equal";
    };
    return num_2;
};
```
- function takes a string and returns " Welcome " if the string equals "JavaScript" and if the string is not equal to "JavaScript" return " Goodbye ".
```javascript
function stringChecker(string){
    if (string === "JavaScript"){
        return "Welcome";
    };
    return "Goodbye";
};
```


**create the following function and call it three times using (if)(else)**
- function takes two numbers and returns bigger number.
```javascript
function NumCheck(numberA, numberB){
    if (numberA > numberB){
        return numberA
    }
    else {
        return "The numbers are equal"
    }; 
};

```
- function takes a string and returns " Welcome " if the string equals "JavaScript" and if the string is not equal to "JavaScript" return " Goodbye ".
```javascript
function strCheck(note){
    if (note === "JavaScript"){
        return "Welcome"
    } else {
        return "Goodbye"
    };
};
```
**create the following function and call it three times using (if)(else if)(else)**
- function takes two numbers and returns bigger number or " The numbers are equal " in case they are equal.
```javascript
function numberCheckValue(numA, numB){
    if (numA > numB){
        return numA;
    }
    else if (numA < numB){
        return numB;
    } else {
        return "The numbers are equal."
    }
}
```
- function takes string and returns "Web Developer" if the string is "JavaScript" and if the string is "Swift" returns "IOS Developer" and if the string is "Kotlin" returns "Android Developer" , otherwise; return "Other Developer".
```javascript
function codingLanguage(language){
    if (language === "JavaScript"){
        return "Web Developer"
    } else if (language === "Swift"){
        return "IOS Developer"
    } else if (language === "Kotlin"){
        return "Android Developer"
    } else {
        return "Other Developer"
    };

};
```

## Homework

**create these followings functions and call them 3 times:**
- function returns person's name if his age is bigger ro equal to 18 , otherwise return his age. *[if else]*
```javascript
function nameAge(name, age){
    if (age >= 18){
        return name;
    }else{
        return age;
    };
};
```
- function returns "great" if the grade is bigger or equal to 70 , and returns "good" if the grade is less than 70 and bigger than 50 and returns "failed" if the grade is equal to 50 or less than 50. *[else if]*
```javascript
function testGrade(grade){
    if (grade >= 70){
        return "great";
    }else if (grade < 70 && grade > 50){
        return "good";
    }else{
        return "failed";
    };
};
```
- function takes two numbers and operator sign: *[else if]*
    - if the sign "-" return the subtraction first number from the second number.
    - if the sign "+" return the addition of two numbers.
    - if the sign "/" return the first number divided to second number.
    - if the sign "*" return the multiplication of two numbers.
```javascript
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
```