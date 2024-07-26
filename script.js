
//VARIABLES
const grid = document.querySelector(".grid");
const inputNumber = document.querySelector("input");
const startBtn = document.querySelector(".start-button");
const resetBtn = document.querySelector(".reset-button");


//FUNCTIONS
function createGridItems() {
    for (let i = 0; i < inputNumber.value; i++) {
        const rowItem = document.createElement("div");
        rowItem.classList.add("grid-row");
        grid.appendChild(rowItem);
        for (let j = 0; j < inputNumber.value; j++) {
            const cellItem = document.createElement("div");
            cellItem.classList.add("grid-square");
            rowItem.appendChild(cellItem);
            cellItem.addEventListener("mouseover", () => {
                cellItem.style["background-color"] = "blue";
            })
        }

    }
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor() {
    let r = getRndInteger(0, 255);
    let g = getRndInteger(0, 255);
    let b = getRndInteger(0, 255);

    r = r.toString();
    g = g.toString();
    b = b.toString();
    let rgb = r + " " + g + " " + b;

    return rgb
}

//EVENT LISTENERS

startBtn.addEventListener("click", () => {
    if (inputNumber.value > 100) {
        alert("Invalid Input. Please change the number!");
    } else {
        createGridItems();
        startBtn.disabled = true;
    }
})

resetBtn.addEventListener("click", () => {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    startBtn.disabled = false;
})
