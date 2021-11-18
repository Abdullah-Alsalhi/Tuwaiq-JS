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