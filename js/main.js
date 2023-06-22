let board = document.getElementById("board");
board.classList.add("text-primary");
board.classList.add("container-fluid");
board.classList.add("text-center");
board.classList.add("d-flex");
board.classList.add("flex-column")
board.classList.add("align-items-center")

let currentTurn;

//let playerXName = getPlayerXName();
//let playerOName = getPlayerOName();

window.addEventListener('load', init);

function init () {

    let heading = document.createElement("h1");
    heading.textContent = "Tic-Tac-Toe";
    board.appendChild(heading);

    createButtons();

    resetButton();
    resetButton.addEventListener('click', )

    currentTurn = 1;
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
        button.id = `square-${i}`;
        grid.appendChild(button);
    }
}

function resetButton () {
    let resetButton = document.createElement("button");
    resetButton.textContent = "Start Over";
    resetButton.setAttribute("id", resetButton);
    resetButton.classList.add("btn");
    resetButton.classList.add("btn-primary")
    board.appendChild(resetButton);
}

function getPlayerXName() {
    let username = prompt("Player 1: Please enter your username", "Player X");
    return username;
}

function getPlayerOName() {
    let username = prompt("Player 1: Please enter your username", "Player O");
    return username;
}

