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
