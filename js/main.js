let board = document.getElementById("board");
board.classList.add("text-light");
board.classList.add("container-fluid");
board.classList.add("d-flex");
board.classList.add("flex-column");
board.classList.add("align-items-center");

let currentPlayer = "X";
let turns = ["","","","","","","","",""];
const winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let running = false;

let winner = document.createElement("h1");
winner.textContent = "";
board.appendChild(winner);

window.addEventListener('load', init);

function init () {

    running = true;
    let heading = document.createElement("h1");
    heading.textContent = "Tic-Tac-Toe";
    board.appendChild(heading);

    createButtons();

    createResetButton();
}

const buttons = [];

function createButtons() {
    for (let i = 0; i < 9; i++) {
    const button = document.createElement("button");
    button.textContent = "";
    button.setAttribute("index", i);
    buttons.push(button);
    button.classList.add('tile');
    function tileClicked() {
        let index = button.getAttribute("index");
        Number(index);
        if(turns[index] !== "" || !running) {
            return;
        }
        turns[index] = currentPlayer;
        button.textContent = currentPlayer; 
        checkWinner();
    }
    button.addEventListener('click', tileClicked);
}
const grid = document.createElement("div");
grid.setAttribute("id", "grid");
grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(3, 1fr)";
grid.style.gridTemplateRows = "repeat(3, 1fr)";

for (const button of buttons) {
    grid.appendChild(button);
}
    
board.appendChild(grid);
}

function createResetButton () {
    let resetButton = document.createElement("button");
    resetButton.textContent = "Start Over";
    resetButton.setAttribute("id", "resetButton");
    resetButton.classList.add("btn", "btn-dark");
    board.appendChild(resetButton);
    resetButton.addEventListener('click', function restartGame() {
        currentPlayer = "X";
        turns = ["","","","","","","","",""];
        for (let i = 0; i < turns.length; i++) {
            document.getElementsByClassName("tile")[i].textContent = turns[i];
        }
        winner.textContent = "";
        running = true;
    })
}

function changeTurn() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
}

function createWinner () {
    let winner = document.createElement("h3");
    winner.textContent = "";
    board.appendChild(winner);
}

//Check Win 

function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winningCombos.length; i++) {
        const winCondition = winningCombos[i];
        const tileOne = turns[winCondition[0]];
        const tileTwo = turns[winCondition[1]];
        const tileThree = turns[winCondition[2]]; 

        if(tileOne === "" || tileTwo === "" || tileThree === "") {
            continue;
        }
        if(tileOne === tileTwo && tileTwo === tileThree) {
            roundWon = true;
            break;
        }
    }
    if(roundWon) {
        winner.textContent = `${currentPlayer} wins!`;
        running = false;
    } else if (!turns.includes("")) {
        winner.textContent = "Draw! Play again?";
        running = false;
    } else {
        changeTurn();
    }
}