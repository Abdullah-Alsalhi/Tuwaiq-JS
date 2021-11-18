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