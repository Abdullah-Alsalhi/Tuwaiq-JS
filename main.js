console.log('Week 4 - Day 2');
console.log('Tuwaiq Academy   JS');

// Exercise 
hrefURL = document.querySelector("#URL");
hrefURL.setAttribute("href", "https://sda.edu.sa/");

imgSRC = document.querySelector("#image");
imgSRC.setAttribute("src", "https://www.almowaten.net/wp-content/uploads/2020/12/%D8%A7%D9%84%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9-%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9-%D8%AA%D8%B7%D9%84%D9%82-%D9%85%D8%B9%D8%B3%D9%83%D8%B1-%D9%87%D9%85%D8%A9-%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA-%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9.jpg");
imgSRC.setAttribute("alt", "Saudi Digital Academy");

hrefURL.setAttribute("id", "link");

// Exercise

parg1 = document.querySelector("#parg1");

clr = document.querySelector("#clr");

function changeColor(event){
    parg1.style.color = "blue";
    console.log(event);
};

clr.addEventListener('click',changeColor);

function changeFontSize(event){
    parg1.style.fontSize = "50px";
    console.log(event);
}

cfs = document.querySelector('#cfs');
cfs.addEventListener('click', changeFontSize);


cff = document.querySelector("#cff");

function changeFontFamily(event){
    parg1.style.fontFamily = "cursive";
    console.log(event);
};

cff.addEventListener("click", changeFontFamily);