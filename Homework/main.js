const allOfThem = document.querySelectorAll("p, span")

// print color or type or font-size or background color of each element
for (i = 0; i < allOfThem.length; i++){
    const colorStyle = getComputedStyle(allOfThem[i])
    console.log(colorStyle.color)
};

// change the color of tag 1 and tag 3
allOfThem[0].style.color = "blue";
allOfThem[2].style.color = "blue";

// change the font-type of tag 2 and 4
allOfThem[1].style.fontType = "Georgia";
allOfThem[3].style.fontType = "Courier New";

// change the font-size of tag 5 and 7

allOfThem[4].style.fontSize = "20px";
allOfThem[6].style.fontSize = "22px";

// change background color of tag 6

allOfThem[5].style.backgroundColor = "red";