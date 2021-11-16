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