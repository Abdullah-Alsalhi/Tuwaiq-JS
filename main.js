console.log('Week 4 - Day 1');
console.log('Tuwaiq Academy   JS');

// Exercise - 

allP = document.querySelectorAll("p")

// for (i = 0; i < allP.length; i++){
//     console.log(allP[i]);
// };

// print the text in all p tag
allP.forEach((element,index) => {
    return console.log(element.innerText);
});

// change the text in paragraph 2 to " I am learning DOM"
allP[1].innerText = "I am learning DOM"

// document.querySelector('.language').innerText = "I am learning DOM"

// change the text in paragraph 5 to "Try to change the text"

paragraph5 = document.querySelector(".test")
paragraph5.innerText = "Try to change the text"

// Exercise -
// print color or type or font-size or background-color in all paragraphs

const domEx1 = document.querySelector(".ex1")
const styleEx1 = getComputedStyle(domEx1);
console.log(styleEx1)

const domEx2 = document.querySelector(".ex2")
const styleEx2 = getComputedStyle(domEx2);
console.log(styleEx2)

const domEx3 = document.querySelector(".ex3")
const styleEx3 = getComputedStyle(domEx3);
console.log(styleEx3)

// change the color in p tag 1 and background-color of p tag 3.

domEx1.style.color = "aqua";

domEx3.style.backgroundColor = "yellow";

// change the font-size and background-color in tag 3.

domEx3.style.color = "red";
domEx3.style.backgroundColor = "orange"