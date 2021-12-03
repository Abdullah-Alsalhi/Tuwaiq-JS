console.log('Week 4 - Day 4 - Project');
console.log('Tuwaiq Academy   JS');

$(document).ready(function() {

    // When the player click on on of the cells => print X || O
    const cells = $(".cell");
    const restart = $("#restart")
    const X = "X";
    const O = "O"
    let turn = "X"
    const turnSpan = $("#turnSpan")

    function restartGame(){
        location.reload()
    }
    restart.click(restartGame);

    function cellClicked(){
        
        if ($(this).text() !== ""){
            $(this).css("background-color", "red");
            setTimeout(()=>{
                $(this).css("background-color", "white")
            }, 500)
        }else {
        if (turn === X){
            $(turnSpan).text(O)
            $(this).text("X");
            turn = O;
        }else {
            $(this).text("O")
            $(turnSpan).text(X)
            turn = X;
        }
    }
    };

    cells.click(cellClicked);


});