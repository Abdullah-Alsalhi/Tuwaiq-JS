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

