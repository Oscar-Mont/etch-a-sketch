//creating the grid based on specified number

const inputNumber = document.querySelector("input");
const grid = document.querySelector(".grid");
const startBtn = document.querySelector(".start-button")
const resetBtn = document.querySelector(".reset-button");

function createGridItems() {
    let numOfDivs = inputNumber.value * inputNumber.value;
    for (let i = 0; i < numOfDivs; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        grid.appendChild(gridSquare);
    }
}


//EVENT LISTENERS
startBtn.addEventListener("click", () => {
    createGridItems();
    startBtn.disabled = true;
})

resetBtn.addEventListener("click", () => {
    //pending to add functionality that resets the grid
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    startBtn.disabled = false;
})

