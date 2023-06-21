let board = document.getElementById("board");
board.classList.add("text-primary");
board.classList.add("container-fluid");
board.classList.add("text-center");
board.classList.add("d-flex");
board.classList.add("flex-column")
board.classList.add("align-items-center")

window.addEventListener('load', init);

function init () {
    let heading = document.createElement("h1");
    heading.textContent = "Tic-Tac-Toe";
    board.appendChild(heading);

    let grid = document.createElement("div");
    grid.classList.add("border");
    grid.classList.add("border-dark");
    grid.classList.add("w-25");
    board.appendChild(grid);
}

function createButtons() {
    let button = document.createElement("button");
    grid.appendChild()
}