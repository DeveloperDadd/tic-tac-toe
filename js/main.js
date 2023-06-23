let board = document.getElementById("board");
board.classList.add("text-primary");
board.classList.add("container-fluid");
board.classList.add("text-center");
board.classList.add("d-flex");
board.classList.add("flex-column")
board.classList.add("align-items-center")

let currentPlayer = "X";
let currentTurn = 1;
let currentSymbol = currentTurn % 2 !== 0 ? symbols[0] : symbols[1];
let turns = ["","","","","","","","",""];

const winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

window.addEventListener('load', init);

function init () {

    let heading = document.createElement("h1");
    heading.textContent = "Tic-Tac-Toe";
    board.appendChild(heading);

    createButtons();

    createResetButton();
    resetButton.addEventListener('click', restartGame);
}
   
function createButtons() {
    let grid = document.createElement("div");
    board.appendChild(grid);
    for (let i = 1; i < 10; i++) {
        if (i === 1 || i === 4 || i === 7) {
            let column = document.createElement("div")
            column.classList.add("col-sm");
            column.classList.add("col-4");
            grid.appendChild(column);
        }
        let button = document.createElement("button");
        button.classList.add("tile");
        button.addEventListener('click', tileClicked);
        grid.appendChild(button);
    }
}

function createResetButton () {
    let resetButton = document.createElement("button");
    resetButton.textContent = "Start Over";
    resetButton.setAttribute("id", "resetButton");
    resetButton.classList.add("btn");
    resetButton.classList.add("btn-primary")
    board.appendChild(resetButton);
}

function restartGame() {
    currentPlayer = "X";
    turns = ["","","","","","","","",""];
}

function changeTurn() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
}


//Check Win 
/*
    turns = [{
        player: players[0].value, // x
    },
    {
        player: players[0].value, // o
    }]...


    function checkWinCondition () {
        var first = null;
        var second = null;
        var third = null;

        for(let i = 0; i < winConditions.length; i++) {
            // loop thru each element in the win condition
            // get the first winTotals value, ex. 3
            //if total of winCondition[0] = 3, player 1 wins
            //if total == 6, player 2 wins
            //var total = 0;
            var v = winTotal[0];
            if ( v == total) {
                gameStatus
            }
           
        }
    }

*/