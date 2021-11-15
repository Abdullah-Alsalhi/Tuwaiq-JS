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
- function takes two numbers and returns bigger number or " The numbers are equal " in case they are equal.
```javascript
function NumCheck(numberA, numberB){
    if (numberA > numberB){
        return numberA
    }
    if (numberA === numberB){
        return "The numbers are equal"
    } else {
        return numberB
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
