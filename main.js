let color = "black"

function populateBoard(size) {
let board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

let amount = size * size;
for (let i = 0; i < amount; i++) {
let square = document.createElement("div");
square.addEventListener("mouseover",(colorSquare));
square.style.backgroundColor = "white";
board.insertAdjacentElement("beforeend", square);
 }
}

populateBoard(16);


function changeSize(input) {
    populateBoard(input)
}

function colorSquare() {
    this.style.backgroundColor = color;
}

function changeColor(choice) {
    color=choice;
}