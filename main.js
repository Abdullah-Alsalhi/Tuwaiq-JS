console.log('Week 2 - Day 3');
console.log('Tuwaiq Academy   JS');

// create a function takes an array and print its items.

let exer_1 = ["Raghad", "Khalid", "Suhaib", "Ahmad"];

function ArrayPrint(array){
    for (let i = 0; i < array.length; i++){
        let output = array[i];
        console.log(output);
    };
};

ArrayPrint(exer_1);


// create a function takes an array and print greeting message to everyone in the array by their name.

function greetStudent(students){
    for (let i = 0; i < students.length; i++){
        output = students[i];
        message = "Welcome " + output;
        console.log(message);
    };
};

greetStudent(exer_1);

// create a function takes an array containing string items and print the length of each item.

let exer_2 = ["Raghad", "Khalid", "Suhaib", "Ahmad"];

function itemLength(array){
    for (let i = 0; i < array.length; i++){
        output = array[i].length;
        console.log(output);
    };
};

itemLength(exer_2);

// create a function takes an array containing string and change the items to be " Welcome $item ".

function welcoming(array){
    for (let i = 0; i < array.length; i++){
        array[i] = "Welcome " + array[i];
        // console.log(array[i]);
    };
};

welcoming(exer_2);

// create a function takes an array and print only the numbers dividable over 3. 

function module3(array){
    for (let i = 0; i < array.length; i++){
        if (array[i] % 3 === 0){
            console.log(array[i])
        }
    };
};

let exer_3 = [17, 15, 8, 12, 7, 25, 24];

module3(exer_3);


// Exercise - function takes two arrays and merge them in new one array.

let students_1 = ["Raghad", "Khalid", "Suhaib", "Ahmad"];
let students_2 = ["Ahmad", "Ali", "Mohammed"];

function concatArray(array_1, array_2){
    let array_3 = array_1.concat(array_2);
    return array_3;
};

concatArray(students_1, students_2);

// function takes an array and return the reverse of it.

function reverseArray(array){
    return array.reverse();
};

reverseArray(students_1);

// function takes an array and object and look for the object inside that array.

function objectArray(array, item){
    let output = array.includes(item);
    return output
};

objectArray(students_1, "Ahmad");
objectArray(students_1, "Abdullah");

// function takes an array and return all the objects inside that array and (,) between them.

function joinArray(array){
    let output = array.join()
    return output;
};

joinArray(students_1);

// Homework

// function takes an array and string and return it back after adding the string to it.

function newElement(array, object){
    array.push(object);
    return array;
};

let students_HW = ["Raghad", "Khalid", "Suhaib", "Ahmad"];

newElement(students_HW, "Abdullah");

// function takes an array and return it back after deleting last item of it.

function deleItem(array){
    array.pop();
    return array;
};

deleItem(students_HW);

// function takes an array and object and returns "YES" if the object included to it and "NO" if the object is not included.

function includesCheck(array, item){
    let output = array.includes(item)
    if (output === true){
        return "YES";
    }else {
        return "NO";
    };
};

includesCheck(students_HW, "Abdullah");

// function takes an array consisting of numbers and returns the array after multiplying each element in 2.

function multyItem(array){
    let newArr = [];
    for (let i = 0; i < array.length; i++){
        newArr.push(array[i] * 2);
    };
    return newArr;
};

numArray = [1, 3, 5, 7, 9];

num_3 = [1, 1, 1, 1, 1];

multyItem(numArray);
multyItem(num_3);

// function takes a string consisting of words and space between them and return an array with these words.

function list(string){
    let output = string.split(" ");
    return output;
};

list("How are you?");
list("I am learning everyday");