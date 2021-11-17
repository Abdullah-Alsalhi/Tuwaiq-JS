console.log('Week 2 - Day 2');
console.log('Tuwaiq Academy   JS');

// Exercise - array

let arr_1 = ["Moh", "Jouza", "Swift", "Tuwaiq-1000"]

console.log(arr_1[1])
console.log(arr_1[3])

arr_1[2] = "Javascript"

console.log(arr_1.length)

// Exercise - Array's methods


let ex_2 = ["Swift", 33, "Ali"];

ex_2.pop(); // remove last item from the array.

ex_2.push("Abdullah"); // add item to the array from the end

ex_2.shift(); // remove first object.

ex_2.unshift("Python"); // add item to the beginning of the array.

console.log(ex_2); 

// create a function takes an array and object and returns the array after adding the object into the start of the array.

function arrayAddItem(array, item){
    array.unshift(item);
    return array;
};

let ex_3 = [];

arrayAddItem(ex_3, "DevOps");
arrayAddItem(ex_3, "Coding");
arrayAddItem(ex_3, "IT");

// Homework

//  function takes an array and index number and returns the item resides in that index.

function array_index(list, indexValue){
    return list[indexValue];
};

let X = ['Abdullah', 'Focusing', 'Coding'];

array_index(X, 0);
array_index(X, 1);
array_index(X, 2);

// function takes an array and return the first item of that array.

function first_item(list_1){
    return list_1[0];
};

first_item(X)

// function takes an array and print its length.

function array_length(list_2){
    return list_2.length;
};

array_length(X)

// function takes an array and print each item of it.

function array_items(list_3){
    for (i = 0; i < list_3.length; i++){
        console.log(list_3[i]);
    };
};

array_items(X)

// function takes an array consisted of numbers and print numbers bigger than 15 only.

let numbersArray = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

function numberChecker(list_4){
    for (i = 0; i < numbersArray.length; i++){
        if (list_4[i] > 15){
            console.log(list_4[i]);
        }
    };
};

numberChecker(numbersArray);