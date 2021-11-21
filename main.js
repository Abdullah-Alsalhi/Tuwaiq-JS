console.log('Week 3 - Day 1');
console.log('Tuwaiq Academy   JS');

// Exercise - function takes an array consisting of string and print each item in it.

fruits = ["Apple", "Orange", "Banana", "Strawberry", "Fig"];

function printAll(array){
    fruits.forEach( (item, index) =>{
        console.log(item);
})};

printAll(fruits);

// function takes an array of numbers and print each number multiplied into 2.

numbers = [1, 2, 3, 10, 14, 21, 28];

function printMult2(array){
    numbers.forEach( (num, index) =>{
        console.log(num * 2);
})};

printMult2(numbers);
// function takes an array consisting of string and return new array consisting of string length bigger than 4.

function nArray(array){
    let output = fruits.filter((item, index) =>{
        return item.length > 4;
})
    return output;
};

nArray(fruits);

// function takes an array of numbers and return only numbers bigger than 3.

function retNum(array){
    let output = numbers.filter((num, index)=>{
        return num > 3;
})
    return output;
};

retNum(numbers);

// Exercise - function takes an array of numbers and return new array based on the array multiply 2.

function new_array(array){
    let output = array.map((item, index)=>{
        return item * 2;
    });
    return output;
};

new_array(numbers);

// function takes an array of numbers and return new array based on the array[item] + 4.

function arr(array){
    let output = array.map((item, index)=>{
        return item + 4;
    })
    return output;
};

arr(numbers);

// function takes an array of numbers and return first item dividable by 5.

function dividable5(array){
    let output = array.find((item, index)=>{
        return item % 5 === 0;
    })
    return output;
};

dividable5(numbers);

// function takes an array of string and return first item has length of 4.

function lengthArray(array){
    let output = array.find((item, index)=>{
        return item.length = 4;
    })
    return output;
};

lengthArray(fruits);