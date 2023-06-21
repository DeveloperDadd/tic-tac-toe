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

    createButtons();
   
    grid.classList.add("border");
    grid.classList.add("border-dark");
    grid.classList.add("w-25");
}

function createButtons() {
    let grid = document.createElement("div");
    
    board.appendChild(grid);
    for (let i = 0; i < 9; i++) {
        let button = document.createElement("button");
        button.id = `button${i}`;
        grid.appendChild(button);
    }
}