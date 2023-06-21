let board = document.getElementById("board");
board.classList.add("text-primary");
board.classList.add("container-fluid");
board.classList.add("text-center");

window.addEventListener('load', init);

function init () {
    let heading = document.createElement("h1");
    heading.textContent = "Tic-Tac-Toe";
    board.appendChild(heading);
}

function createButtons() {

}