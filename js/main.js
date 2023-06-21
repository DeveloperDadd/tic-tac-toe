let board = document.getElementById("board");

window.addEventListener('load', init);

function init () {
    let heading = document.createElement("h1");
    heading.textContent = "Tic-Tac-Toe";
    board.appendChild(heading);
}

function createButtons() {
    
}