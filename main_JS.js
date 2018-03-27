let turnColor = 'brown';
let gameBoard = [];
const rows = 7;
const columns = 6;



let rowsCounters={};
let rowIndex, colIndex;

let sepRowArr = document.getElementsByClassName("sep_row");

for(let i = 0; i < rows; i++){
    gameBoard[i] = []
    for(let j = 0; j < columns; j++){
        gameBoard[i][j] = null;
    }
}


Array.from(sepRowArr, item => item).forEach(function(element) {
    element.onmouseover = showCircle;
    element.onmouseout = hideCircle;
    element.onclick = play;
});

let rowsArr = document.getElementsByClassName("row");

Array.from(rowsArr, item => item).forEach(function(element) {
    rowIndex = Number(element.id.substring((element.id).length-1,(element.id).length));
    rowsCounters[rowIndex] = 0;
});

console.log(rowsCounters);
console.log(gameBoard);

function showCircle(){
    this.style.backgroundColor = turnColor;
}

function hideCircle(){
    this.style.backgroundColor = '#dadada';
}

let currentRow;
let currentCircle;


function play(){
    hideCircle.call(this,)
    currentRow = this.id
    console.log(currentRow)
    rowIndex = Number(currentRow.substring(currentRow.length-1,currentRow.length));
    colIndex = rowsCounters[rowIndex]++;

    console.log(colIndex);
    if(colIndex < 6){
    gameBoard[rowIndex][colIndex] = turnColor;


    currentCircle = "circle_" + rowIndex + "_" + colIndex;
    currentCircle = document.getElementById(currentCircle);
    currentCircle.classList.add("circle_" + turnColor);

    turnColor === 'yellowgreen' ? turnColor = 'brown' : turnColor = 'yellowgreen'
    }
}