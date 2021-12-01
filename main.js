console.log('Week 4 - Day 3');
console.log('Tuwaiq Academy   JS');

$(document).ready(function(){
    // change the src in image tag
    $("#flag").attr("src", "https://launch.sa/assets/images/logos/tuwaiq1000-dark.svg");
    $("#flag").attr("alt", "Tuwaiq logo");
    
    // change the url and alt in a tag.
    $("#link").attr("href", "https://www.linkedin.com/in/abdullahalsalhi/")
    $("#link").text("MyLinkedIn");
    
    // change the id in a tag.
    $("#link").attr("id", "website");

    // Exercise

    // change color button 
    parg1 = $("#parg1")
    
    btn1 = $("#btn1")

    btn1.on("click", function(){
        parg1.css("color", "red");
    });

    // change font size
    btn2 = $("#btn2")
    
    btn2.on("click", function(){
        parg1.css("font-size", "35px")
    });

    // change font type
    
    $("#btn3").click(function(){
        parg1.css("font-family", "cursive");
    });

    
});