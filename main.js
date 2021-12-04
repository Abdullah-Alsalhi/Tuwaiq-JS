console.log('Week 4 - Day 4 - Project');
console.log('Tuwaiq Academy   JS');

$(document).ready(function() {

    // When the player click on on of the cells => print X || O
    const cells = $(".cell");
    const restart = $("#restart")
    const turn_text = $("#turn")
    const X = "X";
    const O = "O"
    let turn = "X"
    const turnSpan = $("#turnSpan")
    const cell_0 = $("#cell_0").text()
    const cell_1 = $("#cell_1").text()
    const cell_2 = $("#cell_2").text()
    const cell_3 = $("#cell_3").text()
    const cell_4 = $("#cell_4").text()
    const cell_5 = $("#cell_5").text()
    const cell_6 = $("#cell_6").text()
    const cell_7 = $("#cell_7").text()
    const cell_8 = $("#cell_8").text()


    restart.hide()
    function restartGame(){
        location.reload()
    }
    restart.click(restartGame);

    function winnerCheck(){
        if ($("#cell_0").text() === X && $("#cell_1").text()  === X && $("#cell_2").text() === X || $("#cell_0").text() === X && $("#cell_4").text() === X && $("#cell_8").text() === X || $("#cell_0").text() === X && $("#cell_3").text() === X && $("#cell_6").text() === X || $("#cell_1").text() === X && $("#cell_4").text() === X && $("#cell_7").text() === X){
            $("#winner").text("Player X is the winner");
            turn_text.hide()
            restart.show()
        } else if ($("#cell_0").text() === X && $("#cell_1").text()  === O && $("#cell_2").text() === O || $("#cell_0").text() === O && $("#cell_4").text() === O && $("#cell_8").text() === O || $("#cell_0").text() === O && $("#cell_3").text() === O && $("#cell_6").text() === O || $("#cell_1").text() === O && $("#cell_4").text() === O && $("#cell_7").text() === O){
            $("#winner").text("Player O is the winner")
            turn_text.hide()
            restart.show()
        }else {
            if ($("#cell_0").text() !== "" && $("#cell_1").text() !== "" && $("#cell_2").text() !== "" && $("#cell_3").text() !== "" && $("#cell_4").text() !== "" && $("#cell_5").text() !== "" && $("#cell_6").text() !== "" && $("#cell_7").text() !== "" && $("#cell_8").text() !== ""){
                $("#winner").text("It's draw! Have another round")
                turn_text.hide()
                restart.show()
            }
        }
    };

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
                        winnerCheck()
                    }else {
                        $(this).text("O")
                        $(turnSpan).text(X)
                        turn = X;
                        winnerCheck()
                    }
        }
    };

    cells.click(cellClicked);


});


