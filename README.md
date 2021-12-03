# Tuwaiq-JS
**Tuwaiq-Academey course of JavaScript programming language.**

## XO project

**STEPS:**

1. Grid Layout [HTML + css]
    - Use div with id 'board' and 9 div with class 'cell'.
    - style grid board.
    - style width & height "cell"
    - HTML:
        - add paragraph "Player Turn:" id="turn"
        - add paragraph "WIN" id="winner"
        - add button "play Again" id = "restart"
1. When the player click on one of the cells => show X || O
    - Also show player turn: X || O (Switch Turn)
    - Invalid move => background red || cant click
1. When a player hit Play Again button reload the page.
1. When the player select 3 Win (check the winner)
    - Build the Logic to check if a player win or not (horizontal, vertical, or diagonal)
1. When a player win:
    - show who is the winner
    - Hide the "turn" p
    - Show button say "Play Again" (restart the game)
    - Make this button restart the game (refresh the page)