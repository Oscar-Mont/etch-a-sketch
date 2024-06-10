
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
                cellItem.style["background-color"] = "red";
            })
        }

    }
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

//not working
// squareDivs = document.getElementsByClassName("grid-square");

// for (let i = 0; i < squareDivs.length; i++) {
//     squareDivs[i].addEventListener("mouseover", () => {
//         squareDivs.style["background-color"] = "red";
//     })
// }